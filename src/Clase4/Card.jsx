import { Link } from "react-router-dom"

const Card = ({item}) => {
    return (
        <div className="col-md-3">
            <Link to={"/producto/" + item.slug} className="text-decoration-none">
                <div className="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded">
                    <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">${item.precio}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card;