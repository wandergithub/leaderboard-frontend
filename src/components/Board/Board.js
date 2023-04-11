import { useSelector } from 'react-redux';
import RaceStatsForm from '../RaceStatsForm/RaceStatsForm';
import PlayerCreateForm from '../PlayerForm/PlayerForm';

const Board = () => {
  const players = useSelector((state) => state.players);

  return (
    <div className="m-5">
      <ul className="list-group">
        {players.map((player) => (
          <li key={Math.random()} className="list-group-item d-flex justify-content-between">
            <span>{player.name}</span>
            <span>
              ELO:
              {player.points}
            </span>
            {' '}
          </li>
        ))}
      </ul>
      <h2 className="mt-5">Add new Race stats:</h2>
      <RaceStatsForm players={players} />
      <PlayerCreateForm />
    </div>
  );
};

export default Board;
