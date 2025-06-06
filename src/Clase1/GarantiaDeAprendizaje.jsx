import learning from "../assets/learning.svg"

const GarantiaDeAprendizaje = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-2">
                    <img src={learning} alt="Certificado" className="img-fliud" />
                </div>
                <div className="col-md-4">
                    <h2 className="titulo fw-bold">Garantía de aprendizaje</h2>
                    <p className="fs-4">No te quedes con dudas. ¡Puedes volver a realizar el curso de forma parcial o total sin costo alguno!</p>
                    <ul>
                        <li className="fs-5">Vuelve a tomar el curso sin costo.</li>
                        <li className="fs-5">Refuerza o recupera las clases que faltaste.</li>
                        <li className="fs-5">Aprovecha la experiencia de diferentes instructores.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GarantiaDeAprendizaje;