import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const EnFamilia = () => {
    let acceso = true;
    const navigate = useNavigate();

    // Para la versión del Componente Navigate
    /* if (!acceso) {
        console.log("No tienes acceso, te redirecciono a la página principal!");
        
        return (
            <>
                <Navigate to={"/"} />
            </>
        )
    } */

    // Para la versión del Hook useNavigate
    useEffect(() => {
        if (!acceso) {
            console.log("No tienes acceso, te redirecciono a la página principal!");
            navigate("/", {replace:true});
        }
    }, [acceso])

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <h1 className="fw-bold">Con las familias</h1>
                    </div>
                    <div className="col-md-6">
                        <img src="https://mcd-landings-l-statics.appmcdonalds.com/uploads-live/Familias_5_5c08103cc1.webp" alt="Con las Familias" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="container-fluid mb-5 bg-warning py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="fw-bold">Compromiso en Familia</h2>
                            <p>Cada día, millones de familias visitan nuestros restaurantes y es nuestra responsabilidad actuar respecto a algunos de los asuntos que más les preocupan. La nutrición, la educación y la salud son los tres pilares fundamentales en la vida de las familias y los mismos sobre los que se construye nuestro compromiso diario con ellas. La mayor responsabilidad que tenemos como Compañía es asegurar el bienestar de las miles de familias que nos visitan cada día.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EnFamilia