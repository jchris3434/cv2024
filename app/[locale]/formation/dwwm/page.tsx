"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import "../cda/cda.css";
import { hind } from "../../fonts/fonts";
import { roboto_condensed } from '../../fonts/fonts';

function Dwwm() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <section className={`cda-page ${roboto_condensed.className}`}>
      <button className='button-cda' onClick={handleBackClick}>Précédent</button>
      <div className="content-container">

        <div className='cda-cursus-title section-title'>
          <p className='cda-color cda-title'>Développeur Web & Web Mobile</p>
        </div>

        <div className='cursus-container'>
          <div className="section">
            <div className="section-title diezPadding">
              <span className='cda-color diezPadding'>#01</span> | Développer la partie front-end d’une application sécurisée
            </div>
            <p className="section-content">Ecosystème et culture numérique</p>
            <p className="section-content">Gérer un projet Web</p>
            <p className="section-content">Installer et configurer son environnement de travail en fonction du projet</p>
            <p className="section-content">Maquetter des interfaces utilisateur web ou web mobile</p>
            <p className="section-content">Maîtriser les langages de programmation : HTML, CSS, JavaScript et le Framework, ReactJS</p>

          </div>

          <div className="section">
            <div className="section-title diezPadding">
              <span className='cda-color diezPadding'>#02</span> | Développer la partie back-end d’une application
            </div>
            <p className="section-content">Développer et implémenter des algorithmes</p>
            <p className="section-content">Concevoir et gérer une base de données</p>
            <p className="section-content">Maîtriser les langages de programmation : PHP, SQL, NoSQL et les Framework Symfony, Node.js</p>
            <p className="section-content">Développer une application mobile IONIC</p>
            <p className="section-content">Documenter le déploiement d’une application</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dwwm;
