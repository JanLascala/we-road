import { Link } from "react-router-dom";

export default function Header() {


    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-light shadow-sm">
                <div className="nav navbar-nav">
                    <div className="logo">
                        <a className="nav-item nav-link active" href="#" aria-current="page">
                            <img src="BooRoad.png" alt="" />
                        </a>
                    </div>

                    <Link className="nav-item nav-link" to="/">Home</Link>
                </div>
            </nav>
        </>


    )

}
