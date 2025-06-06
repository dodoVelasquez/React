import Descripcion from "./Descripcion";
import Titulo from "./Titulo";

const Header = () => {
    let contenidoTexto = "Domina la librería JavaScript más demandada en la industria para el desarrollo front end y construye un proyecto con las mejores prácticas del mercado laboral.";
    return (
        <div className="container-fluid backgroundHeader ">
            <div className="container">
                <div className="row">
                    <div className="col my-5">
                        <Titulo tipoCurso={"Curso de"} nombreCurso={"React JS Developer"}/>
                        <Descripcion texto={contenidoTexto}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
