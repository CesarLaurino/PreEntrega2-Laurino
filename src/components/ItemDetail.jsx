import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.image} alt={item.title} className="img-fluid img-detail" />
            </div>
            <div className="col-md-4">
                <h1 className="title-detail">{item.title}</h1>
                <p className="desc-detail">{item.description}</p>
                <p><b>USD {item.price}</b></p>
                <ItemCount stock={item.stock} />
            </div>
        </div>
    )
}

export default ItemDetail;