import { useState } from "react"

const States = () => {
    let contador1 = 1
    const [contador2, setContador2] = useState(0);

    /* useState estado actual y una función que permite actualizarlo */
    const sumarContador = () => {
        contador1++;
        setContador2(contador2 + 1);
    }

    const restarContador = () => {
        contador1--;
        setContador2(contador2 - 1);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="column">
                        <h1>States</h1>
                        <p>Variable <b>{contador1}</b></p>
                        <p>Estado <b>{contador2}</b></p>
                        <p><button onClick={sumarContador} className="btn btn-primary">Sumar</button>
                            <button onClick={restarContador} className="btn btn-success">Restar</button></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default States;
