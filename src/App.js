import { Routes, Route } from 'react-router-dom';
import './App.css';
import LeaderBoard from './components/LeaderBoard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LeaderBoard />} />
      </Routes>
    </>
  );
}

export default App;
