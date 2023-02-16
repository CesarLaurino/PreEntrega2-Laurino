
const Item = ({item}) => {
    return (
                <div className="card">
                    <img src={item.image} className="card-img" alt={item.title}/>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p className="card-text">{item.description}</p>
                        <p className="card-price">$USD{item.price}</p>
                    </div>
                </div>
    )
}

export default Item;

