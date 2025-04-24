import { Link } from "react-router-dom";

export default function Header() {


    return (
        <>
            <nav class="navbar navbar-expand navbar-light bg-light">
                <div class="nav navbar-nav">
                    <div className="logo">
                        <a class="nav-item nav-link active" href="#" aria-current="page">
                            <img src="vite.svg" alt="" />
                        </a>
                    </div>

                    <Link class="nav-item nav-link" to="/">Home</Link>
                </div>
            </nav>
        </>


    )

}
