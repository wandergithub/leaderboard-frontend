import { useSelector } from "react-redux";

export default function PublicBoard() {
  const players = useSelector((state) => state.players);
  
  return (
      <table className="table m-5" style={{ color: "white" }}>
        <thead>
            <tr>
                <th scope="col">Rank</th>
                <th scope="col">Player</th>
                <th scope="col">Elo</th>
                <th scope="col">Races #</th>
            </tr>
        </thead>
        <tbody>
        {players.map((player, index) => (
          <tr
            key={player.id}
          >
            <td>{index + 1}</td>
            <td>{player.name}</td>
            <td>{player.points}</td>{" "}
            <td>999</td>{" "}
          </tr>
        ))}
        </tbody>
      </table>
  );
}
