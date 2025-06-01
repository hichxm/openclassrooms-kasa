import './Header.scss'
import Logo from './../assets/logo.svg'
import {NavLink} from "react-router";

export default function Header() {
    return <header className="header">
        <NavLink to="/">
            <img className="header-logo" src={Logo} alt="Kasa logo"/>
        </NavLink>

        <div className="header-menu">
            <NavLink className="header-menu-item" to="/">Accueil</NavLink>
            <NavLink className="header-menu-item" to="/about">A Propos</NavLink>
        </div>
    </header>;
}