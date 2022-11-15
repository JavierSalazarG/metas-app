import estilos from '../css/vinculos.module.css'
function Vinculo({Icon, texto, href}){
    return(
        <a href={href} className={estilos.vinculo} >
            <Icon className={estilos.logo} />
           {texto && <span className={estilos.texto}>{texto}</span>}
        </a>
    )
}

export default Vinculo;