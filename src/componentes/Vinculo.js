import { Link } from 'react-router-dom';
import estilos from '../css/vinculos.module.css'
function Vinculo({Icon, texto, to}){
    return(
        <Link to={to} className={estilos.vinculo} >
            <Icon className={estilos.logo} />
           {texto && <span className={estilos.texto}>{texto}</span>}
        </Link>
    )
}

export default Vinculo;