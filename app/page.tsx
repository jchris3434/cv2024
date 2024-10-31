"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import PhotoCard2 from "./components/PhotoCard2";
import CardIdentity from "./components/CardIdentity";
import Navbar from "./components/Navbar";
import BurgerMenu from "./components/burgerMenu";
import "./css/MainPage.css";

export default function Home() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
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
            <div className="bibi">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima impedit nostrum aspernatur laboriosam tenetur consequuntur odit cumque quia doloremque voluptates iure consectetur atque, provident dolorem expedita architecto, quaerat sed culpa.</p>
            </div>
        </section>
    );
}