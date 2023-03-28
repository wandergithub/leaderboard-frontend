import { useEffect, useState } from "react";

export default function RaceStatsForm(props) {
  const { players } = props;
  const [playersPull, setPull] = useState([]);
  const [racers, setRacers] = useState([]);

  useEffect(() => {
    setPull(players);
  }, [players]);

  return (
    <>
      <h5>Available players: {playersPull.length}</h5>
      <ul className="list-group">
        {playersPull.map((player) => (
          <li
            key={player.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span>{player.name}</span>
            <span>ELO: {player.points}</span>{" "}
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                if (!racers.includes(player)) {
                  setRacers([...racers, player]);
                  setPull([...playersPull.filter((element) => player !== element)]);
                }
              }}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
      <h5>Race results:  {racers.length}</h5>
      <ul className="list-group bg-info">
        {racers.map((player, index) => (
          <li
            key={player.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span>{index}</span>
            <span>{player.name}</span>
            <span>ELO: {player.points}</span>{" "}
          </li>
        ))}
      </ul>
      <form>
        <button type="button" className="btn btn-success mt-3">
          Add race stats
        </button>
      </form>
    </>
  );
}
