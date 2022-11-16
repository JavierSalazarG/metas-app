import {Routes, Route} from 'react-router'
import './App.css';
import Layaut from './componentes/Layaut'
import Lista from './componentes/lista/Lista';
import Noencontrado from './componentes/NoEncontrado';
import Detalles from './componentes/nueva/Detalles';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layaut />}>
        <Route index element={<Lista/>}/>
        <Route path="/listar" element={<Lista />} />
        <Route path="/crear" element={<Detalles />} />
      </Route>
      <Route path="*" element={<Noencontrado />} />
      
    </Routes>
    
  );
}

export default App;
