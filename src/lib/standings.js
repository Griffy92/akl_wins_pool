import teamInfo from '../models/teams';
import managers from '../models/managers';

export const sumWins = (teams) => teams.reduce((total, t) => total + (t.wins ?? 0), 0);

// "2025-2026" -> "2025–2026"
export const formatSeason = (year) => year.replace('-', '–');

// .643 style, or an en dash when no games have been played
export const formatPct = (pct) =>
  pct == null ? '–' : pct.toFixed(3).replace(/^0/, '');

// Turn a season from the models into table rows (manager name, full team info, total).
export const seasonRows = (season) =>
  season.managers.map((m) => {
    const teams = m.teams.map((t) => ({ wins: 0, ...t, ...teamInfo[t.teamId] }));
    return {
      key: `${season.year}-${m.managerId}`,
      managerName: managers[m.managerId]?.name ?? 'Unknown',
      teams,
      totalWins: sumWins(teams),
    };
  });

// Sort by total wins and number the rows. Ties share a rank (1, 1, 3...).
export const addRanks = (rows) => {
  const sorted = [...rows].sort(
    (a, b) => b.totalWins - a.totalWins || a.managerName.localeCompare(b.managerName),
  );
  let prev;
  return sorted.map((row, i) => {
    const rank = prev && prev.totalWins === row.totalWins ? prev.rank : i + 1;
    prev = { ...row, rank };
    return prev;
  });
};

// Attach live standings ({ cbsName, wins, losses }[]) to rows without mutating them.
// `missing` lists teams we couldn't find, so a CBS naming change shows up instead of silently reading 0.
export const mergeStandings = (rows, standings) => {
  const byName = new Map(standings.map((s) => [s.cbsName, s]));
  const missing = new Set();

  const merged = rows.map((row) => {
    const teams = row.teams.map((t) => {
      const s = byName.get(t.cbsName);
      if (!s) {
        missing.add(t.cbsName);
        return t;
      }
      const games = s.wins + s.losses;
      return { ...t, wins: s.wins, loss: s.losses, winPercent: games ? s.wins / games : null };
    });
    return { ...row, teams, totalWins: sumWins(teams) };
  });

  return { rows: merged, missing: [...missing] };
};
