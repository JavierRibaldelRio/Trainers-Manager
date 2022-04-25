import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Components/about';
import AnyadirTrainer from './Components/Anyadir';

function App() {
  return (
    <div className="App">


      sdfjaksdjf
      <Routes >
        <Route path="/anyadir-trainer" element={<AnyadirTrainer />} />

        <Route path="about" element={<About />} />

      </Routes>
    </div>
  );
}

export default App;
