import { Routes, Route } from 'react-router-dom';
import './App.css';
import LeaderBoard from './components/LeaderBoard';

function App() {
  return (
    <>
      <h1>Leader Board</h1>
      <Routes>
        <Route path="/" element={<LeaderBoard />} />
      </Routes>
    </>
  );
}

export default App;
