import { Link } from "react-router-dom";

export default function Header() {


    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-light shadow-sm">
                <div className="nav navbar-nav">
                    <div className="logo">
                        <Link className="nav-item nav-link active mx-5" to="/">
                            <img src="/images/BooRoad.png" alt="" style={{ width: "80px" }} />
                        </Link>
                    </div>
                </div>
            </nav>
        </>


    )

}
