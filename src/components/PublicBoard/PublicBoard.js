import { useSelector } from "react-redux";

export default function PublicBoard() {
  const players = useSelector((state) => state.players);

  return (
    <div className="publicBoard">
      <h1>SRL Leader Board</h1>
      <table
        className="table m-5"
        style={{ color: "#979899", fontFamily: "system-ui" }}
      >
        <thead>
          <tr>
            <th scope="col" className="t-title">
              Rank
            </th>
            <th scope="col" className="t-title">
              Player
            </th>
            <th scope="col" className="t-title">
              Elo
            </th>
            <th scope="col" className="t-title">
              Races #
            </th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr
              className={(index % 2 === 0 ? "r-1" : "r-2") + ""}
              key={player.id}
              style={{ color: "white" }}
            >
              <td
                className={
                  index === 0
                    ? "gold"
                    : index === 1
                    ? "silver"
                    : index === 2
                    ? "bronce"
                    : ""
                }
              >
                {index + 1}
              </td>
              <td>{player.name}</td>
              <td>{player.points}</td>{" "}
              <td>{player.races ? player.races : "0"}</td>{" "}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
