const IniciarSesion = () => {
    return (
        <button className="btn botonVerde">Iniciar Sesion</button>
    );
}

const CerrarSesion = () => {
    return (
        <button className="btn botonVerde">Cerrar Sesion</button>
    );
}

const Renderizacion = () => {
    let curso = "Curso de React JS";
    let academia = "Educacion IT";
    let estaLogueado = false;

    return (
        /* //1- Devolver 1 unico elemento 
        <div>
            <h1>Renderizacion</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium magnam ab temporibus deserunt, quod totam dolorum fuga natus sapiente quam incidunt placeat voluptatem labore atque doloribus sint soluta asperiores facere.</p>
        </div> */

        /* //2- Devolver un elemento JSX
        <>
            <p> <b>{curso}</b> en <b><u>{academia}</u></b></p>
        </> */

        //3- Renderizacion condicional
        <>
            {estaLogueado ? <CerrarSesion /> : <IniciarSesion />}
            {estaLogueado ? <button className="btn botonVerde">Cerrar Sesion</button> : <button className="btn botonVerde">Iniciar Sesion</button>}
            {<button className="btn botonVerde">{estaLogueado?"Cerrar Sesión" : "Iniciar Sesión"}</button>}
        </>

    );
};

export default Renderizacion;