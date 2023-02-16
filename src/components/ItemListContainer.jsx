import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items,setItems] = useState([]);

    useEffect(() => {
        fetch ("https://api.mercadolibre.com/sites/MLA/search?=samsung s23&limit=20")
        .then ((respuesta) => respuesta.json ())
        .then ((data) => {
            setItems(data.results)
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <ItemList items = {items} />
            </div>
        </div>
    )
}

export default ItemListContainer;