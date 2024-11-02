import "../css/burgerMenu.css";
import React, { useState } from 'react';

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <header className="headerBurger">
            <button onClick={handleToggle} className="hamburger">
                <span className={`line ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`line ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`line ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </button>

            <nav className={`nav-burger ${isOpen ? 'open' : ''}`}>
                <ul className="nav-list-burger">
                    <li className="nav-item-burger">
                        <a href="">A propos</a>
                    </li>
                    <li className="nav-item-burger">
                        <a href="">Formation</a>
                    </li>
                    <li className="nav-item-burger">
                        <a href="">CV</a>
                    </li>
                    <li className="nav-item-burger">
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
