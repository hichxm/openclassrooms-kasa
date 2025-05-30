import Header from "./Header.jsx";
import './Layout.scss'
import Logo from './../assets/logo_white.svg'

export default function Layout({children}) {
    return <>
        <div className="layout">
            <Header />
            <div className="content">
                {children}
            </div>
        </div>
        <div className="footer">
            <img src={Logo} alt="Kasa logo"/>
            <span className="copyright">© 2020 Kasa. All rights reserved</span>
        </div>
    </>
}