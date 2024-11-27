"use client"

import { useChangeLocale, useCurrentLocale } from "../../../locales/client"
import "../css/Navbar.css";
import Image from 'next/image';

interface LocaleSelectProps {
    className?: string;
}

export const LocaleSelect = ({ className }: LocaleSelectProps)  => {
    const locale = useCurrentLocale();
    const changeLocale = useChangeLocale();

    return (
        <nav className="navFlag burgerNavFlag">
            <button 
                onClick={() => changeLocale("en")}
            >
                <Image
                    src="/icones/ukFlag.png"
                    width={25}
                    height={25}
                    alt="English"
                />
            </button>
            <button 
                onClick={() => changeLocale("fr")}
            >
                <Image
                    className="frenchFlag"
                    src="/icones/frFlag.png"
                    width={27}
                    height={27}
                    alt="Français"
                />
            </button>
        </nav>
    );
};
