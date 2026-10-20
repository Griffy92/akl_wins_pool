import { Tabs } from 'antd';
import SeasonTable from '../components/SeasonTable';
import seasons from '../models/seasons';
import { addRanks, formatSeason, seasonRows } from '../lib/standings';

const history = [...seasons]
  .sort((a, b) => b.year.localeCompare(a.year))
  .map((season) => ({ year: season.year, rows: addRanks(seasonRows(season)) }));

function SeasonPanel({ rows }) {
  const winners = rows.filter((r) => r.rank === 1);
  return (
    <>
      <p className="page-subtitle">
        Winner: {winners.map((w) => w.managerName).join(' and ')} with {winners[0].totalWins} wins
      </p>
      <SeasonTable rows={rows} />
    </>
  );
}

const items = history.map(({ year, rows }) => ({
  key: year,
  label: formatSeason(year),
  children: <SeasonPanel rows={rows} />,
}));

export default function History() {
  return (
    <>
      <h1 className="page-title">Past seasons</h1>
      <Tabs items={items} defaultActiveKey={history[0].year} />
    </>
  );
}
