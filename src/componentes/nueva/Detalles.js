import estilos from "../../css/detalles.module.css"
import '../../App.css'

const frecuencia = ["dia", "semana", "mes", "año"];
const icono = ["🏃‍♂️", "📖", "💻", "🗑️", "🕺", "🧘‍♀️", "🏋️‍♀️", "🛩️","🍽️", "🛌", "🤳", "🎮"];

function Detalles() {
    return ( 
        <div className="tarjeta">
            <form className="p-5">
                <label className={estilos.label}>
                    Describe tu meta *
                    <input className={estilos.input} />
                </label>
                <label className={estilos.label}>
                    ¿Con que frecuencia quieres cumplir tu meta? *
                    <div className="flex mb-6">
                        <input className={estilos.input +" mr-6" }  type="number"/>
                        <select className={estilos.input}>
                            {frecuencia.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label className={estilos.label}>
                    ¿Cuantas veces deseas cumplir la meta? *
                    <input className={estilos.input} type="number" />
                </label>
                <label className={estilos.label}>
                    ¿Tienes fecha limite? 
                    <input className={estilos.input} type="date" />
                </label>
                <label className={estilos.label}>
                    ¿Cuantas veces has completado esta meta?
                    <input className={estilos.input} type="number" />
                </label>
                <label className={estilos.label}>
                    Escoje un icono para la meta *
                    <select className={estilos.input}>
                        {icono.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                    
                </label>
            </form>
            <div className={estilos.botones}>
                <button className="boton boton--negro">Crear</button>
                <button className="boton boton--gris">Cancelar</button>
            </div>
        </div>
     );
}

export default Detalles;