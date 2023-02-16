import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items,setItems] = useState([]);

    useEffect(() => {
        fetch ("https://fakestoreapi.com/products?limit=20")
        .then ((respuesta) => respuesta.json ())
        .then ((data) => {
            setItems(data)
        })
    }, [])

    return (
            <div className="row">
                <ItemList items = {items}  />
            </div>
    )
}

export default ItemListContainer;