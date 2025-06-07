import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import './Layout.scss'

export default function Layout({children}) {
    return <>
        <div className="layout">
            <Header/>
            <div className="layout-content">
                {children}
            </div>
        </div>
        <Footer/>
    </>
}