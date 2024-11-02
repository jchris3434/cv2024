"use client"; 

import { useI18n } from "@/locales/client";
import "../css/Navbar.css";
import { LocaleSelect } from "./LocaleSelect";
import { roboto_condensed } from "../fonts/fonts";

export default function Navbar() {
    const t = useI18n(); // Utiliser useI18n ici

    const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const aboutMeSection = document.getElementById("about-me");
        if (aboutMeSection) {
            aboutMeSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="header">
            <div className="nav-container">
                <nav className={`nav ${roboto_condensed.className}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#about-me" onClick={handleScrollToSection}>
                                {t('navbar.about')}
                            </a>
                        </li>
                        <li className="nav-item"><a href="">{t('navbar.education')}</a></li>
                        <li className="nav-item"><a href="">{t('navbar.resume')}</a></li>
                        <li className="nav-item"><a href="">{t('navbar.contact')}</a></li>
                    </ul>
                </nav>
                <LocaleSelect />
            </div>
        </header>
    );
}
