import seasons from '../models/seasons';
import managers from '../models/managers';
import teamInfo from '../models/teams';
import { addRanks, formatSeason, sumWins } from './standings';

export const ordinal = (n) => {
  const suffix = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
};

// ---- Every completed season, newest first, with ranked rows ----------------
const buildSeason = (season) => {
  const rows = addRanks(
    season.managers.map((m) => {
      const teams = m.teams.map((t) => ({ ...t, ...teamInfo[t.teamId] }));
      return {
        managerId: m.managerId,
        managerName: managers[m.managerId]?.name ?? 'Unknown',
        teams,
        totalWins: sumWins(teams),
      };
    }),
  );
  const perRank = {};
  rows.forEach((r) => { perRank[r.rank] = (perRank[r.rank] || 0) + 1; });
  return {
    year: season.year,
    rows: rows.map((r) => ({ ...r, tied: perRank[r.rank] > 1, fieldSize: rows.length })),
  };
};

export const seasonResults = [...seasons]
  .sort((a, b) => b.year.localeCompare(a.year))
  .map(buildSeason);

// ---- Per-manager leaderboard -----------------------------------------------
const byManager = new Map();
for (const season of seasonResults) {
  for (const row of season.rows) {
    if (!byManager.has(row.managerId)) {
      byManager.set(row.managerId, { managerId: row.managerId, name: row.managerName, seasons: [] });
    }
    byManager.get(row.managerId).seasons.push({
      year: season.year,
      rank: row.rank,
      tied: row.tied,
      fieldSize: row.fieldSize,
      totalWins: row.totalWins,
      teams: row.teams,
    });
  }
}

export const leaderboard = [...byManager.values()].map((m) => {
  const totalWins = m.seasons.reduce((n, s) => n + s.totalWins, 0);
  // seasons are newest first, so on a tie the most recent season is kept
  const best = m.seasons.reduce((a, s) => (s.totalWins > a.totalWins ? s : a));
  const worst = m.seasons.reduce((a, s) => (s.totalWins < a.totalWins ? s : a));
  // each season's first-round pick is the earliest (lowest) of the three
  const firstPicks = m.seasons.map((s) => Math.min(...s.teams.map((t) => t.draftPosition)));
  return {
    key: String(m.managerId),
    managerId: m.managerId,
    name: m.name,
    seasons: m.seasons,
    played: m.seasons.length,
    titles: m.seasons.filter((s) => s.rank === 1).length, // a tied first place counts for both
    podiums: m.seasons.filter((s) => s.rank <= 3).length,
    totalWins,
    avgWins: totalWins / m.seasons.length,
    avgFirstPick: firstPicks.reduce((n, p) => n + p, 0) / firstPicks.length, // lower = earlier
    best: { wins: best.totalWins, year: best.year },
    worst: { wins: worst.totalWins, year: worst.year },
  };
});

// ---- Pool records ------------------------------------------------------------
const teamEntries = seasonResults.flatMap((s) =>
  s.rows.flatMap((r) =>
    r.teams.map((t) => ({ year: s.year, manager: r.managerName, team: t.name, wins: t.wins, pick: t.draftPosition })),
  ),
);
const managerEntries = seasonResults.flatMap((s) =>
  s.rows.map((r) => ({ year: s.year, manager: r.managerName, wins: r.totalWins })),
);
const margins = seasonResults.map((s) => {
  const top = s.rows[0].totalWins;
  const winners = s.rows.filter((r) => r.rank === 1).map((r) => r.managerName);
  const next = s.rows.find((r) => r.totalWins < top);
  return {
    year: s.year,
    winners,
    // shared titles are a margin of 0; otherwise the gap to second place
    margin: winners.length > 1 || !next ? 0 : top - next.totalWins,
  };
});

const holders = (list, value, dir) => {
  const target = Math[dir](...list.map(value));
  return list.filter((e) => value(e) === target);
};

// "Spurs (Si, 2025–2026)" and, when tied, "+2 more"
const describe = (found, text) => {
  const [first, ...rest] = found;
  return rest.length ? `${text(first)} and ${rest.length} more tied` : text(first);
};
const teamText = (e) => `${e.team}, ${e.manager}, ${formatSeason(e.year)}`;
const managerText = (e) => `${e.manager}, ${formatSeason(e.year)}`;
const marginText = (e) => `${e.winners.join(' and ')}, ${formatSeason(e.year)}`;
const wins = (n) => `${n} ${n === 1 ? 'win' : 'wins'}`;

const topTeam = holders(teamEntries, (e) => e.wins, 'max');
const bottomTeam = holders(teamEntries, (e) => e.wins, 'min');
const steal = holders(teamEntries.filter((e) => e.pick >= 21), (e) => e.wins, 'max');
const bust = holders(teamEntries.filter((e) => e.pick <= 10), (e) => e.wins, 'min');
const topSeason = holders(managerEntries, (e) => e.wins, 'max');
const bottomSeason = holders(managerEntries, (e) => e.wins, 'min');
const bigMargin = holders(margins, (e) => e.margin, 'max');
const closeMargin = holders(margins, (e) => e.margin, 'min');

export const poolRecords = [
  { key: 'team-high', label: 'Most wins by one team', value: topTeam[0].wins, detail: describe(topTeam, teamText) },
  { key: 'team-low', label: 'Fewest wins by one team', value: bottomTeam[0].wins, detail: describe(bottomTeam, teamText) },
  { key: 'steal', label: 'Best late-round pick', sub: 'picks 21 to 30', value: wins(steal[0].wins), detail: describe(steal, (e) => `${e.team} at #${e.pick}, ${e.manager}, ${formatSeason(e.year)}`) },
  { key: 'bust', label: 'Worst early pick', sub: 'picks 1 to 10', value: wins(bust[0].wins), detail: describe(bust, (e) => `${e.team} at #${e.pick}, ${e.manager}, ${formatSeason(e.year)}`) },
  { key: 'season-high', label: 'Best manager season', value: wins(topSeason[0].wins), detail: describe(topSeason, managerText) },
  { key: 'season-low', label: 'Worst manager season', value: wins(bottomSeason[0].wins), detail: describe(bottomSeason, managerText) },
  { key: 'margin-big', label: 'Biggest title margin', value: wins(bigMargin[0].margin), detail: describe(bigMargin, marginText) },
  {
    key: 'margin-close',
    label: 'Closest title race',
    value: closeMargin[0].margin === 0 ? 'Tied' : wins(closeMargin[0].margin),
    detail: describe(closeMargin, marginText),
  },
];