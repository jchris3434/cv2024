"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import PhotoCard2 from "./components/PhotoCard2";
import CardIdentity from "./components/CardIdentity";
import Navbar from "./components/Navbar";
import BurgerMenu from "./components/burgerMenu";
import AboutMe from "./components/AboutMe";
import "./css/MainPage.css";

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section>
            {!isMobile ? <Navbar /> : <BurgerMenu />}
            <div className="presentationCard">
                <PhotoCard2 />
                <CardIdentity className="" />
            </div>
            <AboutMe />
        </section>
    );
}
