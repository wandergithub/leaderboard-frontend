import { useSelector } from "react-redux";
import place_1 from "./Assets/1st-place-medal-svgrepo-com.svg";
import place_2 from "./Assets/2nd-place-medal-svgrepo-com.svg";
import place_3 from "./Assets/3rd-place-medal-svgrepo-com.svg";
import RaceStatsForm from "../RaceStatsForm/RaceStatsForm";

const Board = () => {
  const players = useSelector((state) => state.players);

  return (
    <div className="m-5">
      <ul className="list-group">
        {players.map((player) => (
          <li key={player.id} className="list-group-item d-flex justify-content-between">
            <span>{player.name}</span>
            <span>ELO: {player.points}</span>{" "}
          </li>
        ))}
      </ul>
      <h2 className="mt-5">Add new Race stats:</h2>
      <RaceStatsForm  players={players} />
    </div>
  );
};

export default Board;
