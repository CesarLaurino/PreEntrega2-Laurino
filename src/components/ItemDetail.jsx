import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.imagen} alt={item.nombre} className="img-fluid" />
            </div>
            <div className="col-md-4">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p><b>${item.price}</b></p>
                <ItemCount stock={item.stock} />
            </div>
        </div>
    )
}

export default ItemDetail;