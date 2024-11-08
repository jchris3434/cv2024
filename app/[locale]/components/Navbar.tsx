"use client";

import { useI18n } from "@/locales/client";
import "../css/Navbar.css";
import { LocaleSelect } from "./LocaleSelect";
import { roboto_condensed } from "../fonts/fonts";
import { Link } from 'react-scroll';


interface NavbarProps {
    className?: string;
}

export default function Navbar({ className }: NavbarProps) {
    const t = useI18n();

    return (
        <header className="header">
            <div className="nav-container">
                <nav className={`nav ${roboto_condensed.className}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link activeClass="active" smooth spy to="about-me" className="nav-link">
                                {t('navbar.about')}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" smooth spy to="education" className="nav-link">
                                {t('navbar.education')}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" smooth spy to="resume" className="nav-link">
                                {t('navbar.resume')}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" smooth spy to="contact" className="nav-link">
                                {t('navbar.contact')}
                            </Link>
                        </li>
                    </ul>

                </nav>
                <LocaleSelect />
            </div>
        </header>
    );
}
