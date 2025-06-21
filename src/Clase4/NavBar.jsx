import { Link } from "react-router-dom"
import Logo from "./Logo"

const NavBar = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-1">
                    <Logo />
                </div>
                <div className="col-md-11">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to={"/productos"}>Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to={"/productos/hamburguesas"}>Hamburguesas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to={"/productos/sandwiches-de-pollo"}>Sandwiches de Pollo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to={"/en-familia"}>En Familia</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar