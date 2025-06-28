import { useEffect, useState } from "react";
import Loading from "./Loading";
import PostsList from "./PostsList";

const APIFetch = () => {
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Con método then y catch
        /* fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            setLoaded(true);
            setItems(data);
        }) */

        // Con función asíncrona aync/await
        (async function() {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setLoaded(true);
            setItems(data);
        })();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>API Fetch</h1>
                    {loaded ? <PostsList data={items} /> : <Loading />}
                </div>
            </div>
        </div>
    )
}

export default APIFetch