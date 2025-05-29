import Header from "./Header.jsx";
import './Layout.scss'

export default function Layout({children}) {
    return <>
        <div className="layout">
            <Header />
            <div className="content">
                {children}
            </div>
        </div>
    </>
}