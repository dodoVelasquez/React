import React from "react";

class PlataformaAlumni extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-5 offset-md-1">
                        <h2 className="titulo fw-bold">Plataforma Alumni</h2>
                        <p className="fs-4">Accede a las clases en vivo y al material adicional de estudio a través de nuestra plataforma virtual.</p>
                        <ul>
                            <li className="fs-5"><b>Suma ITCréditos</b> y canjéalos por cursos.</li>
                            <li className="fs-5">Realiza los exámenes desde tu casa y <b>certifícate.</b></li>
                            <li className="fs-5">Mantente <b>conectado con la comunidad.</b></li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <video src="https://static.educacionit.com/educacionit/assets/alumni-platform.webm" width={"100%"} autoPlay />
                    </div>
                </div>
            </div>
        );
    }
}

export default PlataformaAlumni;