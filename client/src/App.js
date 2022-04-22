import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import About from './about';

function App() {
  return (
    <div className="App">


      sdfjaksdjf
      <Routes >
        <Route path="/" element={<Home />} />

        <Route path="about" element={<About />} />

      </Routes>
    </div>
  );
}

export default App;
