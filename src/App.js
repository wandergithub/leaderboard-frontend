import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Board from "./components/Board/Board";
import { PlayerCreateForm } from "./components/PlayerForm/PlayerForm";
import { fetchPlayers } from "./redux/Reducer";
import PublicBoard from "./components/PublicBoard/PublicBoard";

function App() {
  const dispatch = useDispatch();
  // Initialize players list
  useEffect(() => {
    dispatch(fetchPlayers());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/public" element={<PublicBoard />} />
      </Routes>
    </>
  );
}

export default App;
