import axios from 'axios';
import * as cheerio from 'cheerio';

const STANDINGS_URL = 'https://www.cbssports.com/nba/standings/regular/';

const clean = (text) => text.replace(/\s+/g, ' ').trim();

// Returns [{ cbsName, wins, losses }] with numbers already parsed.
export const handler = async () => {
  try {
    const { data } = await axios.get(STANDINGS_URL, { timeout: 8000 });
    const $ = cheerio.load(data);
    const standings = [];

    $('table tbody tr').each((_, row) => {
      const cells = $(row).find('td');
      const cbsName = clean(cells.eq(1).text()).split(' - ')[0].trim();
      const wins = parseInt(clean(cells.eq(2).text()), 10);
      const losses = parseInt(clean(cells.eq(3).text()), 10);

      if (!cbsName || Number.isNaN(wins) || Number.isNaN(losses)) return; // header/spacer rows
      standings.push({ cbsName, wins, losses });
    });

    if (standings.length === 0) {
      throw new Error('No standings rows found. CBS may have changed their markup.');
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        // browsers keep it 5 min, Netlify's CDN 15 min
        'Cache-Control': 'public, max-age=300, s-maxage=900',
      },
      body: JSON.stringify(standings),
    };
  } catch (error) {
    console.error('Error scraping standings:', error); // full detail stays in the function logs
    return {
      statusCode: 502,
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
      body: JSON.stringify({ error: 'Could not load standings.' }),
    };
  }
};
