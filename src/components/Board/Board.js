import { useSelector } from "react-redux";
import place_1 from "./Assets/1st-place-medal-svgrepo-com.svg";
import place_2 from "./Assets/2nd-place-medal-svgrepo-com.svg";
import place_3 from "./Assets/3rd-place-medal-svgrepo-com.svg";

const Board = () => {
  const players = useSelector((state) => state.players);

  return (
    <div className="m-5">
      <ul className="list-group">
        {players.map((player) => (
          <li className="list-group-item d-flex justify-content-between">
            <span>{player.name}</span>
            <span>ELO: {player.points}</span>{" "}
          </li>
        ))}
      </ul>
      <button type="button" className="btn btn-primary mt-3">
        Add race stats
      </button>
    </div>
  );
};

export default Board;
