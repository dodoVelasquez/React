const Formularios = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("")

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Formularios</h1>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="text" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formularios;