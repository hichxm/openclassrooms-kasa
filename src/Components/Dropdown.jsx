import Close from './../assets/close.svg';
import './Dropdown.scss';
import {useState} from "react";

export default function Dropdown({children, title = 'DROPDOWN_TITLE'}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();

        setIsOpen(!isOpen);
    }

    return <div className="dropdown">
        <a href="#" onClick={handleClick} className="header">
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