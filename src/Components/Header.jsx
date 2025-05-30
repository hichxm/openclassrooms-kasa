import './Header.scss'
import Logo from './../assets/logo.svg'
import {NavLink} from "react-router";

export default function Header() {
    return <div className="header">
        <NavLink to="/" className="logo">
            <img className="image" src={Logo} alt="Kasa logo"/>
        </NavLink>

        <div className="menu">
            <NavLink className="item" to="/">Accueil</NavLink>
            <a className="item" href="#">A Propos</a>
        </div>
    </div>;
}