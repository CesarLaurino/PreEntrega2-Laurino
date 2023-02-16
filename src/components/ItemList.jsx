import Item from "./Item";

const ItemList = ({items}) => {
    return (
        items.map(item => 
        <div className="col-sm-3 cartas" key={item.id}>
            <Item item={item} />
        </div>
        )
    )
}

export default ItemList;