const CertificaTusConocimientos = () =>{
    let contenido ="Tu certificado de EducaciónIT está respaldado por las más de 9.000 empresas que confían en nosotros para capacitar y reclutar a sus colaboradores, en todo LATAM.";
    
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="titulo fw-bold">Certifica tus conocimientos</h2>
                    <p className="fs-3">{contenido}</p>
                </div>
                <div className="col-md-6 text-end">
                    <img src="/images/certificado.svg" alt="Certificado" width={320}/>
                </div>
            </div>
        </div>
    )
}

export default CertificaTusConocimientos;