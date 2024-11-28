"use client"

import { useChangeLocale } from "../../../locales/client"
import "../css/Navbar.css";
import Image from 'next/image';

interface LocaleSelectProps {
    readonly className?: string;
}

export const LocaleSelect = ({ className }: LocaleSelectProps)  => {
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
