import React, { useState } from 'react';
import "../css/Projects.css";
import Image from 'next/image';
import { hind } from "../fonts/fonts";
import { useI18n } from "@/locales/client";

interface ProjectsProps {
    readonly isMobile: boolean;
}

const projects = [
    {
        id: 1,
        title: "Exaprint",
        description: "Optimisation constante du site e-commerce",
        technos: ["/public/logos/reactLogo.png", "/public/logos/dockerLogo.png"],
        videoSrc: "/videos/trailer-Exaprint.mp4",
    },
    {
        id: 2,
        title: "Resto Chez Olive",
        description: "Développement d'un site WordPress pour un restaurant local",
        technos: ["/public/logos/wordpressLogo.png", "/public/logos/elementorLogo.png"],
        videoSrc: "/videos/chez-olive.mp4",
    },
    {
        id: 3,
        title: "Landify",
        description: "Application web pour gérer des projets d'équipe en temps réel",
        technos: ["/public/logos/vueLogo.png", "/public/logos/firebaseLogo.png"],
        videoSrc: "/videos/Landify.mp4",
    },
    {
        id: 4,
        title: "CMS Maison",
        description: "Développement d'un site e-commerce rapide et optimisé",
        technos: ["/logos/reactjs.svg", "/logos/vuejs-logo.png"],
        videoSrc: "/videos/teaser-CMS.mp4",
    },
    {
        id: 5,
        title: "Portfolio",
        description: "Création de mon portfolio en Next.js avec des animations",
        technos: ["/public/logos/nextjsLogo.png", "/public/logos/tailwindLogo.png"],
        videoSrc: "/videos/demo-jc.mp4",
    },
    {
        id: 6,
        title: "Boutique WooCommerce",
        description: "Développement d'un site e-commerce rapide et optimisé",
        technos: ["/logos/reactjs.svg", "/logos/vuejs-logo.png"],
        videoSrc: "/videos/ceramiste.mp4",
    },
    {
        id: 7,
        title: "Logiciel de gestion",
        description: "Création d'un logiciel de gestion de clients et création de devis",
        technos: ["/public/logos/nextjsLogo.png", "/public/logos/tailwindLogo.png"],
        videoSrc: "/videos/osmova.mp4",
    },
];

function Projects({ isMobile }: ProjectsProps): JSX.Element {

    const t = useI18n();

    const [currentProject, setCurrentProject] = useState(0); // Index du projet visible

    const handleNext = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section id="project" className={`projects-section ${hind.className}`}>
            <div className="carousel-container">
                {/* Flèche gauche */}
                <button className="carousel-arrow left-arrow" onClick={handlePrev}>
                    <Image
                        className="chevron"
                        src="/chevron_left.svg"
                        width={50}
                        height={50}
                        alt="Précédent"
                    />
                </button>

                {/* Projet affiché */}
                <div className="project-card">

                    {/* VIDEO */}
                    <div className="video-container">
    <video
        key={projects[currentProject].videoSrc} // Ajout de la clé pour forcer le re-rendu
        autoPlay
        controls
        playsInline
        preload="auto"
    >
        <source src={projects[currentProject].videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</div>


                    <div className="project-text-container">
                        <h3>{projects[currentProject].title}</h3>
                        <span>{projects[currentProject].description}</span>
                        <div className="project-technos">
                            {projects[currentProject].technos.map((techno, index) => (
                                <Image
                                    key={index}
                                    src={techno}
                                    alt={`${projects[currentProject].title} technology ${index}`}
                                    width={150}
                                    height={150}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Flèche droite */}
                <button className="carousel-arrow right-arrow" onClick={handleNext}>
                    <Image
                        className="chevron"
                        src="/chevron_right.svg"
                        width={50}
                        height={50}
                        alt="Suivant"
                    />
                </button>
            </div>
        </section>
    );
}

export default Projects;
