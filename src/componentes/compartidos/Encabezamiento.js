import '../../css/encabezado.css'
import estilos from '../../css/vinculos.module.css'
import Vinculo from '../Vinculo' 
import {ReactComponent as PerfilSVG} from '../../img/perfil.svg';
import { ReactComponent as LogoSVG } from '../../img/logo.svg';

function Encabezamiento() {
    return (
        <header className="encabezado">
            <div className="logoYTitulo">
                <LogoSVG className={estilos.logo}/>
                <a href="../../App.js">Metas App</a>
            </div>
            <nav>
                <Vinculo
                    href="/perfil"
                    Icon={PerfilSVG}>
                </Vinculo>
            </nav>
        </header>
    );
}

export default Encabezamiento;
