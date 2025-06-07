import {useState} from "react";

import Close from './../assets/close.svg';

import './Dropdown.scss';

export default function Dropdown({children, title = 'DROPDOWN_TITLE', open = false}) {
    const [isOpen, setIsOpen] = useState(open);

    const handleClick = (e) => {
        e.preventDefault();

        setIsOpen(!isOpen);
    }

    return <div className="dropdown">
        <a href="#" onClick={handleClick} className="dropdown-header">
            <span>{title}</span>
            <span>
                <img className={"dropdown-header-icon" + (isOpen ? ' dropdown-header-icon-rotate' : '')} src={Close}
                     alt="Fermer"/>
            </span>
        </a>
        <div className={"dropdown-content" + (isOpen ? ' dropdown-content-open' : '')}>
            <div className="inner">
                {children}
            </div>
        </div>
    </div>
}