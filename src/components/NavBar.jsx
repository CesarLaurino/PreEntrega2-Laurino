import logo from "./img/logoml.png"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col navbar-warning bg-warning">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href={"/"}><img className="logoml" src={logo} alt="logo" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href={"/indumentaria"}>Indumentaria</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={"/joyeria"}>Joyeria</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={"/electronica"}>Electronica</a>
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