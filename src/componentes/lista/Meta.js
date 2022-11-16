import estilos from '../../css/Meta.module.css'
import '../../App.css'



function Meta({ icono, eventos, periodo, detalles, completado, meta }) {
    
    return ( 
        <div className={estilos.meta + " tarjeta"}>
            <div className="flex items-center">
                <div className={estilos.icono}>{icono}</div>
                <p className={estilos.frecuencia}>{eventos}<sub >/ {periodo}</sub></p>
                <p>{detalles}</p>
            </div>
            <div className='flex'>
                <div className='relative m-2 mx-5'>   
                    <p className='text-center'>{completado} de {meta}</p>
                   
                </div>
                <button className='boton boton--gris'>Completado</button>
            </div>
        </div>
     );
}

export default Meta;