// showRecord adds a small "W-L" line under the logo. SeasonTable turns it on only
// when the separate L / Win % columns are hidden (small screens).
export default function TeamCell({ team, showRecord = false }) {
  if (!team) return null;

  const record = `${team.wins ?? 0}-${team.loss ?? 0}`;

  return (
    <span className="team-cell" title={showRecord ? `${team.name} (${record})` : team.name}>
      <span className="team-cell__main">
      <img className="team-cell__logo" src={`/logos/${team.image}`} alt="" />
        <span className="team-cell__name">{team.name}</span>
      </span>
      {showRecord && <span className="team-cell__record">{record}</span>}
    </span>
  );
}