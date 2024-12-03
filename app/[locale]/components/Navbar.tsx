"use client";

import { useI18n } from "@/locales/client";
import "../css/Navbar.css";
import { LocaleSelect } from "./LocaleSelect";
import { roboto_condensed } from "../fonts/fonts";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

// Mapper les sections avec les clés exactes de traduction
const sectionKeys: { [key: string]: string } = {
    "about-me": "about",
    "education": "education",
    "resume": "resume",
    "contact": "contact",
};

export default function Navbar() {
    const t = useI18n();

    // État pour gérer la visibilité des items
    const [visibleItems, setVisibleItems] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleItems((prev) => Math.min(prev + 1, Object.keys(sectionKeys).length));
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="header">
            <div className="nav-container">
                <nav className={`nav ${roboto_condensed.className}`}>
                    <ul className="nav-list">
                        {Object.keys(sectionKeys).map((section, index) => (
                            <li
                                key={section}
                                className={`nav-item item${index + 1} ${
                                    visibleItems > index ? "visible" : "hidden"
                                }`}
                            >
                                <Link activeClass="active" smooth spy to={section} className="nav-link">
                                {t(`navbar.${sectionKeys[section]}` as "navbar.about" | "navbar.education" | "navbar.resume" | "navbar.contact")}

                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <LocaleSelect />
            </div>
        </header>
    );
}
