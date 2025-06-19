const Renderizado = () => {
    let mostrar = true;

    /* Opción #1 => Rendering condicional */

    /* if (mostrar) {
        mostrar = "[CONECTADO]";
    } else {
        mostrar = "[NO CONECTADO]";
    } */

    /* if (mostrar) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Rendering Condicional</h1>
                        <ul>
                            <li>Inicio</li>
                            <li>Servicios</li>
                            <li>Usuario <b>{mostrar}</b></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="text-white bg-dark p-5">Error! Usuario No Conectado!</h1>
                </div>
            </div>
        </div>
    )   */

    /* Opción #2 => Operador && */
    /* let texto; 

    if (mostrar) {
        texto = "[CONECTADO]";
    } else {
        texto = "[NO CONECTADO]";
    } */

    /* Opción #3 => Operador ternario */
    let texto = mostrar ? "[CONECTADO]" : "[NO CONECTADO]";

    /* Opción #4 => Renderización de Listas */
    const productos = ["Coca Cola", "Sprite", "Pepsi", "Seven Up"];

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>Rendering Condicional</h1>
                    <ul>
                        <li>Inicio</li>
                        <li>Servicios</li>
                        {/* {mostrar && <li>Usuario {texto}</li>} */}
                        {mostrar ? <li>Usuario {texto}</li> : ""}
                    </ul>
                    <ul>
                        {
                            productos.map(item => (
                                <li key={item}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Renderizado;