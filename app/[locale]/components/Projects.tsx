import React, { useState } from 'react';
import "../css/Projects.css";
import Image from 'next/image';
import { hind, roboto_condensed } from "../fonts/fonts";
import { useI18n } from "@/locales/client";

interface ProjectsProps {
    readonly isMobile: boolean;
}

function Projects({ isMobile }: ProjectsProps): JSX.Element {

    const t = useI18n();

    const projects = [
        {
            id: 1,
            title: t('projects.title1'),
            description: t('projects.description1'),
            technos: ["/logos/reactjs3.png", "/logos/TS.png", "/logos/docker4.png", "/logos/ab-tasty-2.jpg.webp", "/logos/csquare1.png"],
            videoSrc: "/videos/trailer-Exaprint.mp4",
        },
        {
            id: 2,
            title: t('projects.title2'),
            description: t('projects.description2'),
            technos: ["/logos/logo-wordpress-7.webp", "/logos/php-logo.svg", "/logos/docker4.png"],
            videoSrc: "/videos/chez-olive.mp4",
        },
        // {
        //     id: 3,
        //     title: t('projects.title3'),
        //     description: t('projects.description3'),
        //     technos: ["/logos/reactjs3.png", "/logos/TS.png", "/logos/docker4.png"],
        //     videoSrc: "/videos/Landify.mp4",
        // },
        {
            id: 4,
            title: t('projects.title4'),
            description: t('projects.description4'),
            technos: ["/logos/reactjs3.png", "/logos/TS.png", "/logos/docker4.png", "/logos/nodejs1.svg", "/logos/mySQL.png"],
            videoSrc: "/videos/teaser-CMS.mp4",
        },
        {
            id: 5,
            title: t('projects.title5'),
            description: t('projects.description5'),
            technos: ["/logos/reactjs3.png", "/logos/nextjs1.png", "/logos/TS.png", "/logos/docker4.png"],
            videoSrc: "/videos/demo-jc.mp4",
        },
        {
            id: 6,
            title: t('projects.title6'),
            description: t('projects.description6'),
            technos: ["/logos/logo-wordpress-7.webp", "/logos/php-logo.svg", "/logos/woo-commerce-logo.png"],
            videoSrc: "/videos/ceramiste.mp4",
        },
        {
            id: 7,
            title: t('projects.title7'),
            description: t('projects.description7'),
            technos: ["/logos/nodejs1.svg", "/logos/logo-feather.jpg", "/logos/mySQL.png", "/logos/docker4.png", "/logos/vuejs-logo.png", "/logos/logo-pinia.svg"],
            videoSrc: "/videos/osmova.mp4",
        },
    ];


    const [currentProject, setCurrentProject] = useState(0);

    const handleNext = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section id="project" className={`projects-section ${hind.className}`}>
            <div className="carousel-container">

                {isMobile && (<h3 className={`project-title ${roboto_condensed.className}`}>
                    {t('projects.mainTitle')}
                </h3>)}

                {/* Flèche gauche desktop*/}
                {!isMobile && (
                    <button className="carousel-arrow left-arrow" onClick={handlePrev}>
                        <Image
                            className="chevron"
                            src="/chevron_left.svg"
                            width={50}
                            height={50}
                            alt="Précédent"
                        />
                    </button>
                )}

                {/* Projet affiché */}
                <div className="project-card">

                    {/* VIDEO */}
                    <div className="video-container">
                        <video
                            key={projects[currentProject].videoSrc}
                            autoPlay
                            controls
                            playsInline
                            preload="auto"
                        >
                            <source src={projects[currentProject].videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Partie Droite - Texte */}
                    <div className="project-text-container">
                        <div className='project-title-arrows-container'>
                            {isMobile && (
                                <button className="carousel-arrow left-arrow" onClick={handlePrev}>
                                <Image
                                    className="chevron"
                                    src="/chevron_left-mobile.svg"
                                    width={50}
                                    height={50}
                                    alt="Précédent"
                                />
                            </button>
                            )}
                            <h3 className='project-title2'>{projects[currentProject].title}</h3>
                            {isMobile && (
                                <button className="carousel-arrow right-arrow" onClick={handleNext}>
                                <Image
                                    className="chevron"
                                    src="/chevron_right-mobile.svg"
                                    width={50}
                                    height={50}
                                    alt="Suivant"
                                />
                            </button>
                            )}
                        </div>

                        <span className='description-text'>{projects[currentProject].description}</span>
                        <div className="project-technos">
                            {projects[currentProject].technos.map((techno, index) => (
                                <Image
                                    key={index}
                                    src={techno}
                                    alt={`${projects[currentProject].title} technology ${index}`}
                                    width={150}
                                    height={150}
                                    className="logo"
                                />
                            ))}
                        </div>
                    </div>
                </div>


                {/* Flèche droite desktop*/}
                {!isMobile && (
                    <button className="carousel-arrow right-arrow" onClick={handleNext}>
                        <Image
                            className="chevron"
                            src="/chevron_right.svg"
                            width={50}
                            height={50}
                            alt="Suivant"
                        />
                    </button>
                )}
            </div>
        </section>
    );
}

export default Projects;
