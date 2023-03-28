import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPlayer } from "../../redux/Reducer";

export function PlayerCreateForm() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  //   Form actions
  const handleChange = (e) => {
    const input = e.target;
    switch (input.name) {
      case "name":
        setName(input.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = () => {
    dispatch(createPlayer(name));
  };

  return (
    <>
      <h2 className="m-5">Add new player</h2>
      <form className="d-flex flex-column m-5" onChange={handleChange}>
        <label for="name" className="form-label mt-3">
          Name:
        </label>
        <input type={"text"} id="name" name="name" />

        <button type="button" className="btn btn-success mt-3" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </>
  );
}
