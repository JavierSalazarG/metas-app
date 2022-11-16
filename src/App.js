
import './App.css';
import Encabezamiento from './componentes/compartidos/Encabezamiento';
import Principal from './componentes/compartidos/Principal';
import Pie from './componentes/compartidos/Pie';

import Lista from './componentes/lista/Lista';
import Detalles from './componentes/nueva/Detalles';

function App() {
  return (
    <div className="App">
      <Encabezamiento ></Encabezamiento>
      <Principal >
      <Detalles></Detalles>
        {/* <Lista></Lista> */}
      </Principal>
      <Pie ></Pie>
    </div>
  );
}

export default App;
