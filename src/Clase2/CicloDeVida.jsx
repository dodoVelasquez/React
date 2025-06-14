import { useEffect } from "react";
import { useState } from "react";

// const Texto = () => {
//     let contenido = "Esto es un texto...";
//     console.log("1 - Montaje");
//     return (
//         <p>{contenido}</p>
//     )
// }

const CicloDeVida = () => {
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);
    console.log("1 - Montaje");

    //Opcion 1 => [] con dependencias vacias se ejecuta una sola vez
    useEffect(() => {
        console.log("2 - Actualizacion del componente");

        /* Desmontado */
        return (() => {
            console.log("3 - Desmontaje");
        })

    }, [])

    //Opcion 2 => [valo2, valor2,...] se ejcuta cuando cambian las dependencias
    /*useEffect(() => {
        console.log("2 - Actualizacion del componente");
    }, [contador])  */

    //Opcion 3 => sin dependencias se ejecuta cuando cambia cualquier estado o prop
    /*useEffect(() => {
        console.log("2 - Actualizacion del componente");
    })*/

    const aumentarContador = () => {
        setContador(contador + 1);
    }
    const aumentarContador2 = () => {
        setContador2(contador2 + 1);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Ciclo de Vida</h1>
                        {/* <Texto /> */}
                        <p>Contador: {contador} <br /><button onClick={aumentarContador} className="btn btn-primary">Aumentar Contador #1</button></p>
                        <p>Contador2: {contador2} <br /><button onClick={aumentarContador2} className="btn btn-primary">Aumentar Contador #2</button></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CicloDeVida;