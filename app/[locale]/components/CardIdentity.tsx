// import { useEffect, useState } from "react";
// import "../css/CardIdentity.css";
// import { audiowide } from "../fonts/fonts";
// import { useCurrentLocale } from "@/locales/client";

// interface Props {
//     className?: string;
// }

// export default function CardIdentity({ className }: Props) {
//     const locale = useCurrentLocale();
//     const fullText = locale === 'fr' ? "DDéveloppeur Full Stack" : "FFull Stack Developer";
//     const lastName = "Fontaine";
//     const firstName = "Jean-Christophe";

//     const [displayedText, setDisplayedText] = useState("");
//     const [letterVisibilityLastName, setLetterVisibilityLastName] = useState(Array(lastName.length).fill(0));
//     const [letterVisibilityFirstName, setLetterVisibilityFirstName] = useState(Array(firstName.length).fill(0));
//     const [isFilled, setIsFilled] = useState(false);

//     // Effet d'écriture pour fullText
//     useEffect(() => {
//         let index = 0;
//         const typingInterval = setInterval(() => {
//             if (index < fullText.length) {
//                 setDisplayedText((prev) => prev + fullText.charAt(index));
//                 index++;
//             } else {
//                 clearInterval(typingInterval);
//             }
//         }, 120); // ici vitesse d ecriture Developpeur full stack

//         return () => clearInterval(typingInterval);
//     }, [fullText]);

//     // Effet d'apparition aléatoire pour chaque lettre de lastName
//     useEffect(() => {
//         const letterTimeouts: NodeJS.Timeout[] = [];
//         const indexes = Array.from({ length: lastName.length }, (_, i) => i);

//         while (indexes.length > 0) {
//             const randomIndex = Math.floor(Math.random() * indexes.length);
//             const letterIndex = indexes.splice(randomIndex, 1)[0];

//             const timeout = setTimeout(() => {
//                 setLetterVisibilityLastName((prev) => {
//                     const newVisibility = [...prev];
//                     newVisibility[letterIndex] = 1;
//                     return newVisibility;
//                 });

//                 if (indexes.length === 0) setIsFilled(true);
//             }, randomIndex * 250);

//             letterTimeouts.push(timeout);
//         }

//         return () => letterTimeouts.forEach((timeout) => clearTimeout(timeout));
//     }, [lastName]);

//     // Effet d'apparition aléatoire pour chaque lettre de firstName
//     useEffect(() => {
//         const letterTimeouts: NodeJS.Timeout[] = [];
//         const indexes = Array.from({ length: firstName.length }, (_, i) => i);

//         while (indexes.length > 0) {
//             const randomIndex = Math.floor(Math.random() * indexes.length);
//             const letterIndex = indexes.splice(randomIndex, 1)[0];

//             const timeout = setTimeout(() => {
//                 setLetterVisibilityFirstName((prev) => {
//                     const newVisibility = [...prev];
//                     newVisibility[letterIndex] = 1;
//                     return newVisibility;
//                 });
//             }, randomIndex * 150);

//             letterTimeouts.push(timeout);
//         }

//         return () => letterTimeouts.forEach((timeout) => clearTimeout(timeout));
//     }, [firstName]);

//     return (
//         <div>
//             <div className={`cardIdentityWrapper ${className}`}>
//                 <p className={`familyName2 ${audiowide.className} ${isFilled ? "fillAnimation" : ""}`}>
//                     {firstName.split("").map((letter, index) => (
//                         <span
//                             key={index}
//                             style={{
//                                 opacity: letterVisibilityFirstName[index],
//                                 transition: "opacity 0.3s ease"
//                             }}
//                         >
//                             {letter}
//                         </span>
//                     ))}
//                 </p>
//                 <p className={`familyName2 ${audiowide.className} ${isFilled ? "fillAnimation" : ""}`}>
//                     {lastName.split("").map((letter, index) => (
//                         <span
//                             key={index}
//                             style={{
//                                 opacity: letterVisibilityLastName[index],
//                                 transition: "opacity 0.3s ease"
//                             }}
//                         >
//                             {letter}
//                         </span>
//                     ))}
//                 </p>
//                 <p className={`myName ${audiowide.className}`}>{displayedText}</p>
//             </div>
//         </div>
//     );
// }
