import axios from 'axios';
import * as cheerio from 'cheerio';

// Handling the scrape
export const handler = async (event, context) => {
    try {
        const url = "https://www.cbssports.com/nba/standings/regular/";
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const tableData = [];

        // Iterate through each row of the table
        $('table tbody tr').each((i, row) => {
            const rowData = {};
            rowData.team = $(row).find('td').eq(1).text().trim();
            rowData.wins = $(row).find('td').eq(2).text().trim();
            rowData.losses = $(row).find('td').eq(3).text().trim();
            tableData.push(rowData);
        });

        return {
            statusCode: 200,
            body: JSON.stringify(tableData),
        };
        
    } catch (error) {
        console.error('Error scraping the site:', error); // Log the error for debugging
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Error scraping site.", details: error.toString() }),
        };
    }
};
