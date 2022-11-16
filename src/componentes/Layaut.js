import Encabezamiento from './compartidos/Encabezamiento';
import Principal from './compartidos/Principal';
import Pie from './compartidos/Pie';
import { Outlet } from 'react-router-dom';

function Layaut() {
    return ( 
        <>
        <Encabezamiento ></Encabezamiento>
        <Principal >
          <Outlet></Outlet>
        </Principal>
        <Pie ></Pie>
      </>
     );
}

export default Layaut;