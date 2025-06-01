import Header from "./Header.jsx";
import './Layout.scss'
import Footer from "./Footer.jsx";

export default function Layout({children}) {
    return <>
        <div className="layout">
            <Header />
            <div className="layout-content">
                {children}
            </div>
        </div>
        <Footer />
    </>
}