import Close from './../assets/close.svg';
import './Dropdown.scss';
import {useState} from "react";

export default function Dropdown({children, title = 'DROPDOWN_NAME'}) {
    const [isOpen, setIsOpen] = useState(false);

    return <div className="dropdown">
        <a href="#" onClick={() => setIsOpen(!isOpen)} className="header">
            <span>{title}</span>
            <span>
                <img src={Close} alt="Fermer"/>
            </span>
        </a>
        <div className={"content" + (isOpen ? ' open' : '')}>
            <div className="inner">
                {children}
            </div>
        </div>
    </div>
}