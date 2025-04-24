import { Outlet } from "react-router-dom";
import Header from "../Componets/Header";
import Footer from "../Componets/Footer";

export default function DefaultLayout() {

    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}