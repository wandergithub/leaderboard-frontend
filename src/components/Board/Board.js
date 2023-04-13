import { useSelector, useDispatch } from 'react-redux';
import RaceStatsForm from '../RaceStatsForm/RaceStatsForm';
import PlayerCreateForm from '../PlayerForm/PlayerForm';
import { deletePlayer } from '../../redux/Reducer';

const Board = () => {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePlayer(id));
  };

  return (
    <div className="m-5">
      <ul className="list-group">
        {players
          && players.map((player) => (
            <li
              key={Math.random()}
              className="list-group-item d-flex justify-content-between"
            >
              <span>{player.name}</span>
              <span>
                ELO:
                {player.points}
              </span>
              {' '}
              <button
                type="button"
                className="btn btn-danger mt-3"
                onClick={() => handleDelete(player.id)}
              >
                delete
              </button>
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
