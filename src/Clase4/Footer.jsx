import { useContext } from "react";
import { ThemeContext } from "../Clase5/context/ThemeContext";

const Footer = () => {
    const {darkMode} = useContext(ThemeContext);

    return (
        <div className={`container-fluid p-3 ${darkMode ? "bg-dark text-white" : ""}`}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <hr />
                        <p>McDonalds Argentina 2025</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer