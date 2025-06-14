import { useEffect } from "react";
import { useState } from "react";

const User = ({ id }) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then(response => response.json())
            .then(data => {
                setUser(data);
                console.log(data);
            })
    }, [id])

    return (
        <div className="alert alert-light" role="alert">
            <p>Name: <b>{user.name}</b></p>
            <p>UserName: <b>{user.username}</b></p>
            <p>Email: <b>{user.email}</b></p>
            <p>Phone: <b>{user.phone}</b></p>
            <p>Web: <b>{user.website}</b></p>
            <p><b>Address</b></p>            
            <Address data={user.address}/>
            <p><b>Company</b></p>
            <Company data={user.company}/>
        </div>
    )
}

const Address = ({ data }) => {
    if (!data) return null;

    return (
        <div className="alert alert-primary" role="alert">
            <p>street : <b>{data.street}</b></p>
            <p>suite : <b>{data.suite}</b></p>
            <p>city	: <b>{data.city}</b></p>
            <p>zipcode : <b>{data.zipcode}</b></p>
        </div>
    );
}

const Company = ({ data }) => {
    if (!data) return <h1>NADA</h1>;

    return (
        <div className="alert alert-primary" role="alert">
            <p>name : <b>{data.name}</b></p>
            <p>catchPhrase: <b>{data.catchPhrase}</b></p>
            <p>Bs	: <b>{data.bs}</b></p>
        </div>
    );
}

const Desafio2 = () => {

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <User id={3} />
                </div>
            </div>
        </div>
    );
}

export default Desafio2;