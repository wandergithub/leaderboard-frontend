import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Board from './components/Board/Board';
import { fetchPlayers } from './redux/Reducer';
import PublicBoard from './components/PublicBoard/PublicBoard';

function App() {
  const dispatch = useDispatch();
  // Initialize players list
  useEffect(() => {
    dispatch(fetchPlayers());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/oakjdj2k121ac" element={<Board />} />
        <Route path="/" element={<PublicBoard />} />
      </Routes>
    </>
  );
}

export default App;
