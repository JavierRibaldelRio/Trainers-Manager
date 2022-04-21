import './App.css';
import { Route, Routes } from 'react-router-dom';     //Importa react router
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/api" element={<Main />} />

      </Routes>
    </div>
  );
}

export default App;
