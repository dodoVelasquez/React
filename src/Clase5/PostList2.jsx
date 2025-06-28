import useAPI from "./useAPI";

function PostsList2() {
    const posts = useAPI("https://jsonplaceholder.typicode.com/users");

    return (
        <div className="container my-5">
            <div className="col-md-4 offset-md-4">
                <div className="row">
                    <ul className="list-group">
                        {
                            posts.map(item => (
                                <li key={item.id} className="list-group-item">#{item.id} {item.name} ({item.username})</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PostsList2