import logo from "./img/logoml.png"
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col navbar-warning bg-warning">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img className="logoml" src={logo} alt="logo" /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to={"/category/men's clothing"}>Indumentaria Masculina</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to={"/category/women's clothing"}>Indumentaria Femenina</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to={"/category/jewelery"}>Joyeria</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to={"/category/electronics"}>Electronica</NavLink>
                                    </li>
                                </ul>
                            <div className="col navbar-warning bg-warning d-flex align-items-center justify-content-end">
                                <CartWidget />
                            </div>
                            </div>
                        </div>
                    </nav>
                </div>
                
            </div>
        </div>
    )
}

export default NavBar;