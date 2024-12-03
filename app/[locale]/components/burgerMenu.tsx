import "../css/burgerMenu.css";
import React, { useState } from 'react';
import { LocaleSelect } from "./LocaleSelect";
import { Link } from "react-scroll";
import { useI18n } from "@/locales/client";

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useI18n(); // Récupère les traductions

    const handleToggle = () => {
        setIsOpen(prev => !prev);
    };

    // Mapper les sections avec les clés de traduction
    const sectionKeys: { [key: string]: string } = {
        "about-me": "about",
        "education": "education",
        "resume": "resume",
        "contact": "contact",
    };

    return (
        <div className="burgerWrapper">
            <div className="local-select-burger">
                <LocaleSelect />
            </div>

            <header className="headerBurger">
                <button onClick={handleToggle} className="hamburger">
                    <span className={`line ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                    <span className={`line ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`line ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                </button>

                <nav className={`nav-burger ${isOpen ? 'open' : ''}`}>
                    <ul className="nav-list-burger">
                        {Object.keys(sectionKeys).map((section) => (
                            <li key={section} className="nav-item-burger">
                                <Link
                                    to={section}
                                    smooth
                                    spy
                                    onClick={handleToggle}
                                    className="nav-link-burger"
                                >
                                    {t(`navbar.${sectionKeys[section]}` as "navbar.about" | "navbar.education" | "navbar.resume" | "navbar.contact")}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </div>
    );
}
