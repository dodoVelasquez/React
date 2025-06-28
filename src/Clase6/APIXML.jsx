import { useEffect, useState } from "react"
import PostsList from "./PostsList";
import Loading from "./Loading";

const APIXML = () => {
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("GET", "https://fakestoreapi.com/products");
        xhr.send();
        xhr.addEventListener("load", () => {
            setLoaded(true);
            setItems(xhr.response);
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>API XMLHttpRequest</h1>
                    {loaded ? <PostsList data={items} /> : <Loading />}
                </div>
            </div>
        </div>
    )
}

export default APIXML