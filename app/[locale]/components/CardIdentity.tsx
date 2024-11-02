"use client";

import { useEffect, useState } from "react"; // Importer useEffect et useState
import "../css/CardIdentity.css";
// import { chakra_petch } from "../fonts/fonts";
import { audiowide } from "../fonts/fonts";
import { useCurrentLocale } from "@/locales/client";

interface Props {
    className?: string;
}

export default function CardIdentity({ className }: Props) {
    const locale = useCurrentLocale();
    let fullText = "";
    console.log('currentlocal jc', locale);

    if (locale == 'fr') {
        fullText = "Dééveloppeur Full Stack";
    } else {
        fullText = "Fuull Stack Developer";
    };

    //const fullText = "Dééveloppeur Full Stack";
    const [displayedText, setDisplayedText] = useState(""); 


    useEffect(() => {
        let index = 0; 
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setDisplayedText((prev) => prev + fullText.charAt(index)); // j'utilise charAt pour éviter le undefined à la fin
                index++;
            } else {
                clearInterval(typingInterval); // Arrête l'intervalle une fois le texte complet affiché
            }
        }, 250);

        // Nettoyage de l'intervalle à la désinscription
        return () => clearInterval(typingInterval);
    }, []); // Exécute l'effet une fois à l'initialisation

    return (
        <div>
            <div className={`cardIdentityWrapper ${className}`}>
                {/* pour rappel futur, chakra_petch est le nom de ma google font */}
                <p className={`familyName ${audiowide.className}`}>Jean-Christophe</p>
                <p className={`familyName2 ${audiowide.className}`}>Fontaine</p>
                <p className={`myName ${audiowide.className}`}>
                    {displayedText}
                </p>
            </div>
        </div>
    );
}
