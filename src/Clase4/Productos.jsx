import { useEffect, useState } from "react"
import productos from "../assets/productos.json"
import Card from "./Card";
import { Link, useParams, useSearchParams } from "react-router-dom";

const Productos = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    const [params, setParams] = useSearchParams();
    const verduras = params.get("verduras");
    const salsa = params.get("salsa");
    const queso = params.get("queso");

    useEffect(() => {      
        if (id) {
            setItems(productos.filter(item => item.categoria == id));
        } else if (verduras || salsa || queso) {
            setItems(productos.filter(item => item.verduras == verduras || item.salsa == salsa || item.queso == queso));
        } else {
            setItems(productos);
        }
    }, [id, verduras, salsa, queso]);

    if (items.length == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <p className="fs-1">⛔</p>
                        <h1 className="display-6">No se encontraron Productos!</h1>
                        <p className="my-5"><Link to={"/"} className="btn btn-warning">Volver</Link></p>
                    </div>
                </div>    
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                {
                    items.map(item => (
                        <Card key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Productos