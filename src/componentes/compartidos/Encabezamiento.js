import '../../css/encabezado.css'
import estilos from '../../css/vinculos.module.css'
import Vinculo from '../Vinculo' 
import {ReactComponent as PerfilSVG} from '../../img/perfil.svg';
import { ReactComponent as LogoSVG } from '../../img/logo.svg';
import { Link } from 'react-router-dom';

function Encabezamiento() {
    return (
        <header className="encabezado ">
            <div className="logoYTitulo">
                <LogoSVG className={estilos.logo}/>
                <Link to="/">Metas App</Link>
            </div>
            <nav>
                <Vinculo
                    to="/perfil"
                    Icon={PerfilSVG}>
                </Vinculo>
            </nav>
        </header>
    );
}

export default Encabezamiento;
