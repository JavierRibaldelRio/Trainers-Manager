import './App.css';
import { Route, Routes } from 'react-router-dom';
import AnyadirTrainer from './Components/Anyadir';
import Buscar from './Components/Buscar';

function App() {
  return (
    <div className="App">


      sdfjaksdjf
      <Routes >
        <Route path="/anyadir-trainer" element={<AnyadirTrainer />} />

        <Route path="/buscar" element={<Buscar />} />

      </Routes>
    </div>
  );
}

export default App;
