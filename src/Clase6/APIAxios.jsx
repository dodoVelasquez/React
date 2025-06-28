import { useEffect, useState } from "react";
import Loading from "./Loading";
import PostsList from "./PostsList";
import APIClient from "./APIClient";

const APIAxios = () => {
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async function() {
            const response = await APIClient.get("/products");
            setLoaded(true);
            setItems(response.data);
        })();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>API Axios</h1>
                    {loaded ? <PostsList data={items} /> : <Loading />}
                </div>
            </div>
        </div>
    )
}

export default APIAxios