import estilos from  '../../css/principal.module.css'
import Vinculo from '../Vinculo';
import { ReactComponent as ListaSVG} from '../../img/lista.svg';
import { ReactComponent as CrearSVG } from '../../img/nueva.svg';

function Principal({ children }) {
    return (
        <div className={estilos.principal}>
            <aside className={estilos.aside}>
                <Vinculo  
                to="/listar" 
                Icon={ListaSVG} 
                texto="Lista de Metas">
                </Vinculo>

                <Vinculo 
                to="/crear" 
                Icon={CrearSVG} 
                texto="Crear Meta">
                </Vinculo>
                
            </aside>
            <main className={estilos.main}>
                {children}
            </main>
        </div>
    );
}

export default Principal;
