import carrito from "./img/cart3.svg"

const CartWidget = () => {
    return (
        <button type="button" className="carrito btn position-relative">
            <img src={carrito} alt="carrito" width={20} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CartWidget;