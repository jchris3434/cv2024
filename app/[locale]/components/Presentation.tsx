import React, { useEffect, useState } from 'react';
import "../css/Presentation.css";
import { useCurrentLocale } from "@/locales/client";

interface PresentationProps {
    readonly isMobile: boolean;
}

function Presentation({ isMobile }: PresentationProps): JSX.Element {
    const locale = useCurrentLocale();
    const fullText = locale === 'fr' ? "DDéveloppeur" : "DDeveloper";
    const lastName = "Fontaine";
    const firstName = "Jean-Christophe";

    const [displayedText, setDisplayedText] = useState("");
    const [letterVisibilityLastName, setLetterVisibilityLastName] = useState(Array(lastName.length).fill(0));
    const [letterVisibilityFirstName, setLetterVisibilityFirstName] = useState(Array(firstName.length).fill(0));
    const [isFilled, setIsFilled] = useState(false);

    // Utilisation de crypto.getRandomValues() pour l'aléatoire côté client
    function getSecureRandomIndex(max: number): number {
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return array[0] % max;
    }

    // Effet d'apparition aléatoire pour chaque lettre de lastName
    useEffect(() => {
        const letterTimeouts: NodeJS.Timeout[] = [];
        const indexes = Array.from({ length: lastName.length }, (_, i) => i);

        while (indexes.length > 0) {
            const randomIndex = getSecureRandomIndex(indexes.length);
            const letterIndex = indexes.splice(randomIndex, 1)[0];

            const timeout = setTimeout(() => {
                setLetterVisibilityLastName((prev) => {
                    const newVisibility = [...prev];
                    newVisibility[letterIndex] = 1;
                    return newVisibility;
                });

                if (indexes.length === 0) setIsFilled(true);
            }, randomIndex * 250);

            letterTimeouts.push(timeout);
        }

        return () => letterTimeouts.forEach((timeout) => clearTimeout(timeout));
    }, [lastName]);

    // Effet d'apparition aléatoire pour chaque lettre de firstName
    useEffect(() => {
        const letterTimeouts: NodeJS.Timeout[] = [];
        const indexes = Array.from({ length: firstName.length }, (_, i) => i);

        while (indexes.length > 0) {
            const randomIndex = getSecureRandomIndex(indexes.length);
            const letterIndex = indexes.splice(randomIndex, 1)[0];

            const timeout = setTimeout(() => {
                setLetterVisibilityFirstName((prev) => {
                    const newVisibility = [...prev];
                    newVisibility[letterIndex] = 1;
                    return newVisibility;
                });
            }, randomIndex * 150);

            letterTimeouts.push(timeout);
        }

        return () => letterTimeouts.forEach((timeout) => clearTimeout(timeout));
    }, [firstName]);

    // Effet d'écriture pour fullText
    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setDisplayedText((prev) => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 120);

        return () => clearInterval(typingInterval);
    }, [fullText]);

    return (
        <section className="presentation-container">
            <div className="center-wrapper">
                <div className="prenom">
                    <p className={`bibi ${isFilled ? "fillAnimation" : ""}`}>
                        {firstName.split("").map((letter, index) => (
                            <span
                                key={`${letter}-${index}`} // Utilisation d'une clé unique
                                style={{
                                    opacity: letterVisibilityFirstName[index],
                                    transition: "opacity 0.3s ease",
                                }}
                            >
                                {letter}
                            </span>
                        ))}
                    </p>
                    <p className={`bibi love ${isFilled ? "fillAnimation" : ""}`}>
                        {lastName.split("").map((letter, index) => (
                            <span
                                key={`${letter}-${index}`} // Même logique pour lastName
                                style={{
                                    opacity: letterVisibilityLastName[index],
                                    transition: "opacity 0.3s ease",
                                }}
                            >
                                {letter}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            <div className="fullStackContainer">
                <h1 className="fullStack-title" data-text="full stack">
                    <span>full stack</span>
                </h1>
            </div>
            <div className="devText">{displayedText}</div>
        </section>
    );
}

export default Presentation;
