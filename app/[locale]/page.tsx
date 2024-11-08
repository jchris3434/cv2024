"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import PhotoCard2 from "./components/PhotoCard2";
import CardIdentity from "./components/CardIdentity";
import Navbar from "./components/Navbar";
import BurgerMenu from "./components/burgerMenu";
import AboutMe from "./components/AboutMe";
import "./css/MainPage.css";
import Education from './components/Education';
import Resume from './components/Resume';
// import Contact from './components/Contact';

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 1024);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
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
            
            <section id="about-me">
                <AboutMe isMobile={isMobile}/>
            </section>
            <section id="education">
                <Education isMobile={isMobile}/>
            </section>
            {/* <section id="resume">
                <Resume isMobile={isMobile}/>
            </section> */}
            {/* <section id="contact">
                <Contact isMobile={isMobile}/>
            </section> */}
        </section>
    );
}
