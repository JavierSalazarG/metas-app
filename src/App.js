
import './App.css';
import Encabezamiento from './componentes/compartidos/Encabezamiento';
import Principal from './componentes/compartidos/Principal';
import Pie from './componentes/compartidos/Pie';
import Meta from './componentes/lista/Meta';

function App() {
  return (
    <div className="App">
      <Encabezamiento ></Encabezamiento>
      <Principal >
        <Meta/>
        </Principal>
      <Pie ></Pie>
    </div>
  );
}

export default App;
