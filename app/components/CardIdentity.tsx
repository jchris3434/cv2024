"use client";

import { useEffect, useState } from "react"; // Importer useEffect et useState
import "../css/CardIdentity.css";
import Image from 'next/image';
import { chakra_petch } from "../fonts/fonts";

interface Props {
    className?: string;
}

export default function CardIdentity({ className }: Props) {
    const fullText = "Dééveloppeur Full Stack";
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
                <p className={`familyName ${chakra_petch.className}`}>Jean-Christophe</p>
                <p className={`familyName2 ${chakra_petch.className}`}>Fontaine</p>
                <p className={`myName ${chakra_petch.className}`}>
                    {displayedText}
                </p>
            </div>
        </div>
    );
}
