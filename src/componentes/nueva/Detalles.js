const frecuencia = ["dia", "semana", "mes", "año"];
const icono = ["🏃‍♂️", "📖", "💻", "🗑️", "🕺", "🧘‍♀️", "🏋️‍♀️", "🛩️","🍽️", "🛌", "🤳", "🎮"];

function Detalles() {
    return ( 
        <div>
            <form>
                <label>
                    Describe tu meta *
                    <input />
                </label>
                <label>
                    ¿Con que frecuencia quieres cumplir tu meta? *
                    <div>
                        <input type="number"/>
                        <select>
                            {frecuencia.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label>
                    ¿Cuantas veces deseas cumplir la meta? *
                    <input type="number" />
                </label>
                <label>
                    ¿Tienes fecha limite? 
                    <input type="date" />
                </label>
                <label>
                    ¿Cuantas veces has completado esta meta?
                    <input type="number" />
                </label>
                <label>
                    Escoje un icono para la meta *
                    <select>
                        {icono.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                    
                </label>
            </form>
            <div>
                <button>Crear</button>
                <button>Cancelar</button>
            </div>
        </div>
     );
}

export default Detalles;