export function PlayerCreateForm() {
  const createPlayer = (e) => {
    
  };

  return (
    <>
      <h2 className="m-5">Add new player</h2>
      <form className="d-flex flex-column m-5" onChange={handleForm}>
        <label for="name" className="form-label mt-3">
          Name:
        </label>
        <input type={"text"} id="name" name="name" />

        <button type="submit" className="btn btn-success mt-3">
          Create
        </button>
      </form>
    </>
  );
}
