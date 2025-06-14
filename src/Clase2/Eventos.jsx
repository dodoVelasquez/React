import { useState } from "react"

const Eventos = () => {
    const [contador, setContador] = useState(0);
    const [texto, setTexto] = useState("");
    const [pais, setTPais] = useState("");

        /* useState estado actual y una función que permite actualizarlo */
    const sumarContador = () => {
        setContador(contador + 1);
    }

    const restarContador = () => {
        if (contador > 0)
            setContador(contador - 1);
    }

    const paisSeleccionado = (e) => {
            setTPais(e.target.value)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Eventos</h1>
                    {/* Evento onClick */}
                    {/* <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={restarContador}>-</button>
                        <button type="button" className="btn btn-primary">{contador}</button>
                        <button type="button" className="btn btn-primary" onClick={sumarContador}>+</button>
                    </div> */}

                    {/* Evento onInput */}
                    {/* <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="name@example.com" value={texto} onInput={(e) => {setTexto(e.target.value)}} />
                        <p>{texto.toUpperCase()}</p>
                    </div> */}

                    {/* Evento onChange */}
                    <div className="mb-3">
                        <label className="form-label" >Seleccione</label>
                        <select className="form-control" onChange={paisSeleccionado}>
                            <option value="" className="">Selecciones Pais</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Chile">Chile</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Mexico">Mexico</option>
                        </select>
                        {pais ? <p>Seleccion: <b>{pais}</b></p> : ""}
                    </div> 


                </div>
            </div>
        </div>
    );
}

export default Eventos; 