function withPosts (BaseComponent) { //HOC
    const posts = [
        {id:1, nombre:"Coca Cola", precio:3500},
        {id:2, nombre:"Pepsi", precio:3300},
        {id:3, nombre:"Sprite", precio:3400},
        {id:4, nombre:"Seven Up", precio:3200}
    ]

    return function(props) {
        return <BaseComponent posts={posts} {...props} />
    }
}

function PostsList(props) { // Base Component
    return (
        <div className="container">
            <div className="col">
                <div className="row">
                    <ul className="list-group">
                        {
                            props.posts.map(item => (
                                <li key={item.id} className="list-group-item">#{item.id} {item.nombre} ${item.precio}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withPosts(PostsList)