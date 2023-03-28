import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Board from "./components/Board/Board";
import { PlayerCreateForm } from "./components/Form/Form";
import { fetchPlayers } from "./redux/Reducer";

function App() {
  const dispatch = useDispatch();
  // Initialize players list
  useEffect(() => {
    dispatch(fetchPlayers());
  }, []);

  return (
    <>
      <h1 className="m-5">SRL Leaderboard</h1>
      <Routes>
        <Route path="/" element={<Board />} />
      </Routes>
      <PlayerCreateForm />
    </>
  );
}

export default App;
