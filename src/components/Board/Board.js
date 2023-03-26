import place_1 from "./Assets/1st-place-medal-svgrepo-com.svg"
import place_2 from "./Assets/2nd-place-medal-svgrepo-com.svg"
import place_3 from "./Assets/3rd-place-medal-svgrepo-com.svg"

const Board = () => {
  return (
    <div className="m-5">
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between">
          <span><img src={place_1} width="25px" />wander</span>
          <span>Points: 2100</span>{" "}
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span><img src={place_2} width="25px" />Pedro</span>
          <span>Points: 2100</span>{" "}
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span><img src={place_3} width="25px" />Fulano</span>
          <span>Points: 2100</span>{" "}
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Fulano</span>
          <span>Points: 2100</span>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Board;
