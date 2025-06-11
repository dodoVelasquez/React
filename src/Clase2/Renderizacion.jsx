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

const Boton = ({ texto }) => {
    return (
        <button className="btn botonVerde">{texto}</button>
    );
}

const Renderizacion = () => {
    let curso = "Curso de React JS";
    let academia = "Educacion IT";
    let estaLogueado = false; // Cambiar a true para simular un usuario logueado
    const productos = ["CocaCola", "Sprite", "Pepso", "Fanta"];
    const productosMC = [
        { id: 1, nombre: "Hamburguesa", imagen: "https://mcdonalds.com.gt/storage/menu-products/1640813826_1.Big%20tasty%20tocino.jpg"},
        { id: 2, nombre: "H Queso", imagen: "https://mcdonalds.com.gt/storage/menu-products/1640814060_2.big%20tasty%20doble.jpg"},
        { id: 3, nombre: "H Doble", imagen: "https://mcdonalds.com.gt/storage/menu-products/1640814187_3.Big%20Tasty.jpg"},
        { id: 4, nombre: "HH Hamburguesa ", imagen: "https://mcdonalds.com.gt/storage/menu-products/1690991975_Bigmac_400x400px_BB.png"},

    ]
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

        /* //3- Renderizacion condicional
        <>
            {estaLogueado ? <CerrarSesion /> : <IniciarSesion />}
            {estaLogueado ? <button className="btn botonVerde">Cerrar Sesion</button> : <button className="btn botonVerde">Iniciar Sesion</button>}
            {<button className="btn botonVerde">{estaLogueado ? "Cerrar Sesión" : "Iniciar Sesión"}</button>}
            {estaLogueado ? <Boton texto={"CERRAR SESION"} /> : <Boton texto={"INICIAR SESION"} />}
        </> */

        //4- Renderizacion de listas
        /*<>
            <div className="container my-5">
                <div className="row ">
                    <div className="col col-md-4">
                        <h1>Renderizacion de Listas</h1>
                        <ul className="list-group">
                            {productos.map((item) => (
                                <li key={item} className="list-group-item">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>*/
        <>
            {/* <h1>Renderizacion de Listas</h1>
            <ul className="list-group">
                {productosMC.map((item) => (
                    <li key={item.id} className="list-group-item">{item.nombre}</li>
                ))}
            </ul> */}
            <div className="container my-5">
                <div className="row">
                    {
                        productosMC.map((item) => (
                            <div key={item.id} className="col col-md-3">
                                <div className="card border-0 shadow mb-5 bg-body-tertiary rounded">
                                    <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                                    <div className="card-body text-center bg-white">
                                        <p className="card-title">{item.nombre}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>

    );
};

export default Renderizacion;