import { useEffect, useState } from "react"
import productos from "../assets/productos.json"
import { Link, useParams } from "react-router-dom";

const Producto = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            setItem(productos.find(item => item.slug == id));
        }
    }, [id])

    if (!item) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <p className="fs-1">⛔</p>
                        <h1 className="display-6">No se encontró el Producto!</h1>
                        <p className="my-5"><Link to={"/"} className="btn btn-warning">Volver</Link></p>
                    </div>
                </div>    
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 text-end">
                    <img src={item.imagen} alt={item.nombre} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1 className="fw-bold">{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <p><b>${item.precio}</b></p>
                    <h2 className="fw-bold">Más información</h2>
                    <p>Información nutricional</p>
                    <p>Información sobre alérgenos</p>
                </div>
            </div>
        </div>
    )
}

export default Producto