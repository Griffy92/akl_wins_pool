import { Table, Grid } from 'antd';
import TeamCell from './TeamCell';
import { formatPct } from '../lib/standings';

const dash = (value) => value ?? '–';

const teamGroup = (i, showRecord) => ({
  title: `Team ${i + 1}`,
  className: 'group-start',
  children: [
    {
      title: '#',
      key: `t${i}-pick`,
      className: 'group-start col-pick',
      align: 'center',
      render: (_, row) => row.teams[i].draftPosition,
    },
    {
      title: 'Team',
      key: `t${i}-team`,
      render: (_, row) => <TeamCell team={row.teams[i]} />,
    },
    {
      title: 'W',
      key: `t${i}-wins`,
      className: 'col-num',
      align: 'center',
      render: (_, row) => dash(row.teams[i].wins),
    },
    ...(showRecord
      ? [
          {
            title: 'L',
            key: `t${i}-loss`,
            className: 'col-num',
            align: 'center',
            render: (_, row) => dash(row.teams[i].loss),
          },
          {
            title: 'Win %',
            key: `t${i}-pct`,
            className: 'col-num',
            align: 'center',
            render: (_, row) => formatPct(row.teams[i].winPercent),
          },
        ]
      : []),
  ],
});

/**
 * One table for both pages.
 * rows: output of addRanks(seasonRows(...))
 * showRecord: also show losses and win % (current season only; hidden on small screens)
 */
export default function SeasonTable({ rows, showRecord = false, loading = false }) {
  const screens = Grid.useBreakpoint();
  const withRecord = showRecord && Boolean(screens.md);

  const compact = !screens.md; // phones: no separate rank column, rank sits in front of the name
  const rankText = (row) => (row.totalWins > 0 ? row.rank : '–');

  const columns = [
    ...(compact
      ? []
      : [
          {
            title: '',
            key: 'rank',
            width: 40,
            align: 'center',
            fixed: 'left',
            className: 'col-rank',
            render: (_, row) => rankText(row),
          },
        ]),
    {
      title: 'Manager',
      key: 'manager',
      width: compact ? 88 : 84,
      fixed: 'left',
      className: 'col-manager',
      render: (_, row) => (
        <>
          {compact && <span className="mgr-rank">{rankText(row)}</span>}
          {row.managerName}
        </>
      ),
    },
    {
      title: 'Total',
      dataIndex: 'totalWins',
      key: 'totalWins',
      align: 'center',
      width: 80,
      className: 'group-start col-total',
    },
    ...[0, 1, 2].map((i) => teamGroup(i, withRecord)),
  ];

  return (
    <Table
      className="season-table"
      columns={columns}
      dataSource={rows}
      rowKey="key"
      pagination={false}
      loading={loading}
      scroll={{ x: 'max-content' }}
      rowClassName={(row) => (row.rank === 1 && row.totalWins > 0 ? 'row--leader' : '')}
    />
  );
}