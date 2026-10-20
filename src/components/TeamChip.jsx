// Logo + wins (+ draft pick) in a small inline group. Used in the manager history rows.
export default function TeamChip({ team }) {
  return (
    <span className="chip" title={`${team.name}, pick #${team.draftPosition}`}>
      <img className="chip__logo" src={`/${team.image}`} alt={team.name} />
      <strong>{team.wins}</strong>
      <span className="chip__pick">#{team.draftPosition}</span>
    </span>
  );
}
