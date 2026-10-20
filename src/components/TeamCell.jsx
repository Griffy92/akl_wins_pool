export default function TeamCell({ team }) {
  if (!team) return null;

  return (
    <span className="team-cell" title={team.name}>
      <img className="team-cell__logo" src={`/logos/${team.image}`} alt="" />
      <span className="team-cell__name">{team.name}</span>
    </span>
  );
}
