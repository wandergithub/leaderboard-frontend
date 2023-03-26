import { Routes, Route, Form } from 'react-router-dom';
import './App.css';
import Board from './components/Board/Board';

function App() {
  return (
    <>
      <h1 className="m-5">Leader Board</h1>
      <Routes>
        <Route path="/" element={<Board />} />
      </Routes>
      <h2 className="m-5" >Add new player</h2>
      <form className="container d-flex flex-column m-5">
        <label for="name" className="form-label mt-3">Name:</label>
        <input type={"text"} id="name" />

        <button type="submit" className="btn btn-success mt-3">Create</button>
      </form>
    </>
  );
}

export default App;
