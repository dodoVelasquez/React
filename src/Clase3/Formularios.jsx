import { useState } from "react";

const Formularios = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("")
    const [nombreError, setNombreError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [telefonoError, setTelefonoError] = useState("");

    //1- => Boton tipo "button"
    const enviarFormulario = () => {
        if (nombre === "") {
            setNombreError("Error! complete el formulario")
            return false;
        }
        else {
            setNombreError("");
        }
        if (email === "") {
            setEmailError("Error! complete el formulario")
            return false;
        }
        else {
            setEmailError("");
        }
        if (telefono === "") {
            setTelefonoError("Error! complete el formulario")
            return false;
        }
        else {
            setTelefonoError("");
        }
        console.log(nombre, email, telefono);
    }

    //2. => Boton tipo "submit"
    const enviarFormulario2 = (e) => {
        e.preventDefault();
        console.log(nombre, email, telefono);
    }

    //3. => Evento con submit 
    const enviarFormulario3 = (e) => {
        //Agregar <form onSubmit={enviarFormulario3}>
        e.preventDefault();
        console.log(nombre, email, telefono);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Formularios</h1>
                    <form onSubmit={enviarFormulario3}>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" value={nombre} onInput={(e) => { setNombre(e.target.value) }} />
                            <div className="text-danger">{nombreError}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" value={email} onInput={(e) => { setEmail(e.target.value) }} />
                            <div className="text-danger">{emailError}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefono</label>
                            <input type="text" className="form-control" value={telefono} onInput={(e) => { setTelefono(e.target.value) }} />
                            <div className="text-danger">{telefonoError}</div>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={enviarFormulario}>Enviar</button>
                        <button type="submit" className="btn btn-primary" onClick={enviarFormulario2}>Enviar2</button>
                        <button type="submit" className="btn btn-primary" >Enviar3</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formularios;