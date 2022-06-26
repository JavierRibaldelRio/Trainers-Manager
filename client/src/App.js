import './App.css';
import { Route, Routes } from 'react-router-dom';
import AnyadirTrainer from './Components/Anyadir';
import Buscar from './Components/Buscar';
import Busqueda from './Components/Busqueda';
import MostrarZapatos from './Components/MostrarZapatos';

function App() {
  return (
    <div className="App">


      TRAINER MANAGER
      <Routes >
        <Route path="/anyadir-trainer" element={<AnyadirTrainer />} />

        <Route path="/buscar" element={<Buscar />} />

        <Route path='/busqueda' element={<Busqueda />} />

        <Routes path='/todos' element={<MostrarZapatos />} />

      </Routes>
    </div>
  );
}

export default App;
