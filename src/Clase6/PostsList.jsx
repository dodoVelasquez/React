const PostsList = ({data}) => {
    return (
        <ul className="list-group">
            {
                data.map(item => (
                    <li key={item.id} className="list-group-item">
                        <img src={item.image} alt={item.title} width={48} className="me-3" /> {item.title} ${item.price}
                    </li>
                ))
            }
        </ul>
    )
}

export default PostsList