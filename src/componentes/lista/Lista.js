import Meta from "./Meta";


const listaMork = [
    {
    "id": "1",
    "detalles": "correr durante 30 min",
    "periodo": "dia",
    "eventos": 1,
    "icono": "🏃‍♂️",
    "meta": 365,
    "plazo": "2030-01-01",
    "completado": 100,

},
    {
        "id": "2",
        "detalles": "Estudiar 3h",
        "periodo": "dia",
        "eventos": 1,
        "icono": "📖",
        "meta": 365,
        "plazo": "2030-01-01",
        "completado": 50,

    },
]

function Lista() {
    return ( 
    listaMork.map( meta => <Meta {...meta}></Meta>)
    );
}

export default Lista;