import { useEffect, useState } from "react"

const useAPI = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {        
        fetch(url)
        .then(response => response.json())
        .then(response => setData(response));
    }, [url])

    return data;
}

export default useAPI