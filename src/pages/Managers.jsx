import { Table } from 'antd';
import TeamChip from '../components/TeamChip';
import { leaderboard, poolRecords, seasonResults, ordinal } from '../lib/stats';
import { formatSeason } from '../lib/standings';

const firstYear = seasonResults.at(-1).year;
const lastYear = seasonResults[0].year;

// Sort by the clicked column, falling back to average wins on ties
const by = (key) => (a, b) => a[key] - b[key] || a.avgWins - b.avgWins;
const DESC_FIRST = ['descend', 'ascend'];

const seasonCell = (s) => (
  <>
    {s.wins} <span className="muted">{formatSeason(s.year)}</span>
  </>
);

const columns = [
  {
    title: 'Manager',
    dataIndex: 'name',
    key: 'name',
    className: 'col-manager',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  { title: 'Seasons', dataIndex: 'played', key: 'played', align: 'center', sorter: by('played'), sortDirections: DESC_FIRST },
  {
    title: 'Titles',
    dataIndex: 'titles',
    key: 'titles',
    align: 'center',
    sorter: by('titles'),
    sortDirections: DESC_FIRST,
    render: (v) => (v > 0 ? <strong>{v}</strong> : v),
  },
  { title: 'Top 3', dataIndex: 'podiums', key: 'podiums', align: 'center', sorter: by('podiums'), sortDirections: DESC_FIRST },
  {
    title: 'Avg wins',
    dataIndex: 'avgWins',
    key: 'avgWins',
    align: 'center',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.avgWins - b.avgWins,
    sortDirections: DESC_FIRST,
    render: (v) => v.toFixed(1),
  },
  { title: 'Total wins', dataIndex: 'totalWins', key: 'totalWins', align: 'center', sorter: by('totalWins'), sortDirections: DESC_FIRST },
  {
    title: 'Avg 1st pick',
    dataIndex: 'avgFirstPick',
    key: 'avgFirstPick',
    align: 'center',
    sorter: (a, b) => a.avgFirstPick - b.avgFirstPick,
    sortDirections: ['ascend', 'descend'], // earliest picks first
    render: (v) => v.toFixed(1),
  },
  {
    title: 'Best season',
    key: 'best',
    align: 'center',
    sorter: (a, b) => a.best.wins - b.best.wins,
    sortDirections: DESC_FIRST,
    render: (_, r) => seasonCell(r.best),
  },
  {
    title: 'Worst season',
    key: 'worst',
    align: 'center',
    sorter: (a, b) => a.worst.wins - b.worst.wins,
    sortDirections: DESC_FIRST,
    render: (_, r) => seasonCell(r.worst),
  },
];

const historyColumns = [
  { title: 'Season', dataIndex: 'year', key: 'year', width: 110, render: formatSeason },
  {
    title: 'Finish',
    key: 'finish',
    width: 110,
    render: (_, s) => `${s.tied ? 'T' : ''}${ordinal(s.rank)} of ${s.fieldSize}`,
  },
  { title: 'Wins', dataIndex: 'totalWins', key: 'wins', width: 70, align: 'center' },
  {
    title: 'Teams',
    key: 'teams',
    render: (_, s) => (
      <span className="chips">
        {s.teams.map((t) => (
          <TeamChip key={t.teamId} team={t} />
        ))}
      </span>
    ),
  },
];

function SeasonHistory({ seasons }) {
  return (
    <Table
      className="season-table history-table"
      size="small"
      columns={historyColumns}
      dataSource={seasons}
      rowKey="year"
      pagination={false}
      scroll={{ x: 'max-content' }}
      rowClassName={(s) => (s.rank === 1 ? 'row--leader' : '')}
    />
  );
}

export default function Managers() {
  return (
    <>
      <h1 className="page-title">Managers</h1>
      <p className="page-subtitle">
        {seasonResults.length} completed seasons, {formatSeason(firstYear)} to {formatSeason(lastYear)}. Select a row to
        see every season.
      </p>

      <Table
        className="managers-table"
        columns={columns}
        dataSource={leaderboard}
        rowKey="key"
        pagination={false}
        scroll={{ x: 'max-content' }}
        expandable={{ expandedRowRender: (row) => <SeasonHistory seasons={row.seasons} />, expandRowByClick: true }}
      />
      <p className="footnote">
        Sorted by average wins, since some managers have played fewer seasons. Avg 1st pick is the average draft position of a
        manager’s first-round pick, so a lower number means they usually draft earlier. A tied first place counts as a title for each
        manager. 2020–2021 was a 72-game season, so its win totals are lower than other years.
      </p>

      <h2 className="section-title">Pool records</h2>
      <ul className="records">
        {poolRecords.map((r) => (
          <li className="record" key={r.key}>
            <div>
              <div className="record__label">
                {r.label}
                {r.sub && <span className="muted"> ({r.sub})</span>}
              </div>
              <div className="record__detail">{r.detail}</div>
            </div>
            <div className="record__value">{r.value}</div>
          </li>
        ))}
      </ul>
    </>
  );
}