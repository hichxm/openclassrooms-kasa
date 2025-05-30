import Logo from "../assets/logo_white.svg";
import {NavLink} from "react-router";

import './Footer.scss';

export default function Footer() {
    return <footer className="footer">
        <NavLink to="/">
            <img src={Logo} alt="Kasa logo"/>
        </NavLink>
        <span className="copyright">© 2020 Kasa. All rights reserved</span>
    </footer>
}