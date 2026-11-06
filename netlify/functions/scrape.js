import axios from 'axios';
import * as cheerio from 'cheerio';

const STANDINGS_URL = 'https://www.cbssports.com/nba/standings/regular/';
const TEAM_LINK = 'a[href*="/nba/teams/"]';

// "/nba/teams/BOS/boston-celtics/" -> "BOS"
const abbrFromHref = (href = '') => href.match(/\/nba\/teams\/([^/]+)\//)?.[1] ?? null;

// Returns [{ cbsAbbr, wins, losses }]. Teams are identified by the code in their
// CBS team link, so display-name changes ("Golden St.", "L.A. Lakers") don't matter.
export const handler = async () => {
  try {
    const { data } = await axios.get(STANDINGS_URL, {
      timeout: 8000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; AKLWinsPool/1.0)',
        Accept: 'text/html,application/xhtml+xml',
      },
    });
    const $ = cheerio.load(data);
    const byAbbr = new Map();

    $('table tbody tr').each((_, row) => {
      const teamCell = $(row).find('td').has(TEAM_LINK).first();
      if (!teamCell.length) return; // header/spacer rows

      const cbsAbbr = abbrFromHref(teamCell.find(TEAM_LINK).first().attr('href'));
      const winsCell = teamCell.next('td');
      const lossCell = winsCell.next('td');
      const wins = parseInt(winsCell.text().trim(), 10);
      const losses = parseInt(lossCell.text().trim(), 10);

      if (!cbsAbbr || Number.isNaN(wins) || Number.isNaN(losses)) return;
      byAbbr.set(cbsAbbr, { cbsAbbr, wins, losses });
    });

    const standings = [...byAbbr.values()];
    console.log(`Parsed ${standings.length} teams from CBS`);
    if (standings.length === 0) {
      throw new Error(`No standings rows found (page was ${String(data).length} chars). CBS may have changed their markup or blocked the request.`);
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
    // Full detail stays in the function logs (Netlify > Logs > Functions)
    console.error('Error scraping standings:', error.response?.status ?? '', error.message);
    return {
      statusCode: 502,
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
      body: JSON.stringify({ error: 'Could not load standings.' }),
    };
  }
};