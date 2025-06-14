import { useEffect } from "react";
import { useState } from "react";

const User = ({ id }) => {
 const [user, setUser] = useState({});
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then(reponse => reponse.json())
            .then(data => {
                setUser(data);
                console.log(data);
                // user = data
            })
    }, [])

    return (
        < div className="alert alert-primary" role="alert" >
            <p>Name: <b>{user.name}</b></p>
            <p>UserName: <b>{user.username}</b></p>
            <p>Email: <b>{user.email}</b></p>
            <p>Phone: <b>{user.phone}</b></p>
            <p>Web: <b>{user.website}</b></p>
        </div >
    )
}

const Desafio1 = () => {

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <User id={1} />
                </div>
            </div>
        </div>
    );
}

export default Desafio1;