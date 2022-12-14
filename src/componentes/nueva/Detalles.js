import estilos from "../../css/detalles.module.css"
import '../../App.css'
import { useState, useEffect } from "react";

function Detalles() {

    const [form, setForm] = useState({
        detalles: '',
        eventos: 0,
        periodo: 'semana',
        icono: 'đŠī¸',
        plazo: '2022-01-01',
        completado: 0
    });

    const {detalles, eventos, periodo, icono, meta, plazo, completado} = form;

    const onChange = (event, props) =>{
        setForm(estado => ({...estado, [props]:event.target.value}));
    }

    useEffect(() => {
        // console.log(form)
    }, [form]);

    const crear = async () =>{
        console.log(form)
    }

    const frecuencia = ["dia", "semana", "mes", "aÃąo"];

    const iconos = ["đââī¸", "đ", "đģ", "đī¸", "đē", "đ§ââī¸", "đī¸ââī¸", "đŠī¸", "đŊī¸", "đ", "đ¤ŗ", "đŽ" , "â", "đ", "đ", "đ", "đą", "đ", "đ", "đģ", "đĨ", "đ", "â", "đ", "đš", "đ", "đ", "âŊ", "đž", "đ", "đĄ", "đŋ", "đģ", "đļ", "đŦ", "đ", "đ", "đ", "đ", "đ", "đ", "đ", "đ", "â¤", "đ", "đ", "đ", "đŗ", "đĒ", "đŠ", "đ¸", "đ", "đ", "đ", "đ", "đē", "đļ", "đ ", "đ", "âž", "đ", "đŊ", "đ", "đĩ", "đŽ", "đŠ", "đ", "đŖ", "đ", "đ", "đ", "đ", "đ", "đ", "đ", "đ", "đ", "đĩ", "đ", "đ", "đŊ", "đ", "đ", "đ", "đ", "đ", "â", "đ", "âĩ", "đ", "đą", "đ°", "đļ", "đ¸", "đ°", "đˇ", "đ", "đĢ", "đĢ", "đ", "đ˛", "đ", "đ", "đ"];




    return ( 
        <div className="tarjeta">
            <form className="p-5">
                <label className={estilos.label}>
                    Describe tu meta *
                    <input 
                    onChange={e => onChange (e, 'detalles')}   
                    className={estilos.input} 
                    value={detalles} />
                </label>
                <label className={estilos.label}>
                    ÂŋCon que frecuencia quieres cumplir tu meta? *
                    <div className="flex mb-6">
                        <input 
                        value={eventos} 
                        className={estilos.input +" mr-6" }  
                        type="number"
                        onChange= {e => onChange (e, 'eventos')}                  
                        
                        />

                        <select 
                        value={periodo} 
                        className={estilos.input}
                        onChange= {e => onChange (e, 'periodo')}  
                        >

                            {frecuencia.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label className={estilos.label}>
                    ÂŋCuantas veces deseas cumplir la meta? *
                    <input 
                    value={meta} 
                    className={estilos.input} 
                    type="number" 
                        onChange={e => onChange (e, 'meta')}  />
                </label>
                <label className={estilos.label}>
                    ÂŋTienes fecha limite? 
                    <input 
                    value={plazo} 
                    className={estilos.input} 
                    type="date" 
                        onChange={e => onChange (e, 'plazo')}  />
                </label>
                <label className={estilos.label}>
                    ÂŋCuantas veces has completado esta meta?
                    <input 
                    value={completado} 
                    className={estilos.input} 
                    type="number" 
                        onChange={e => onChange (e, 'completado')}  />
                </label>
                <label className={estilos.label}>
                    Escoje un icono para la meta *<br />
                    <select 
                    value={icono} 
                    className={estilos.iconoM}
                    onChange= {e => onChange (e, 'icono')}  >
                        {iconos.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                    
                </label>
            </form>
            <div className={estilos.botones}>
                <button onClick={crear} className="boton boton--negro">Crear</button>
                <button className="boton boton--gris">Cancelar</button>
            </div>
        </div>
     );
}

export default Detalles;