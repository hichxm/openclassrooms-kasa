import Layout from "../Components/Layout.jsx";

import './NotFound.scss';
import {NavLink} from "react-router";

export default function NotFound() {
    return <Layout>
        <div className="not-found">
            <h1 className="not-found-status">404</h1>
            <p className="not-found-message">Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">
                <span className="not-found-link">Retourner sur la page d'accueil</span>
            </NavLink>
        </div>
    </Layout>
}