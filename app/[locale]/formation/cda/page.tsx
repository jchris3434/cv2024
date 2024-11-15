"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import "./cda.css";
import { hind } from "../../fonts/fonts";
import { roboto_condensed } from '../../fonts/fonts';

function Cda() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <section className={`cda-page ${roboto_condensed.className}`}>
      <button className='button-cda' onClick={handleBackClick}>Précédent</button>
      <div className="content-container">
        
        <div className='cda-cursus-title section-title'>
          <p className='cda-color cda-title'>Concepteur Développeur d'Applications</p>
          <div className='devopsOption'>
            <span>option</span><span className='devops'>DevOps</span>
          </div>
        </div>
        
        <div className='cursus-container'>           
          <div className="section">
            <div className="section-title diezPadding">
              <span className='cda-color diezPadding'>#01</span> | Développer une application sécurisée
            </div>
            <p className="section-content">Installer et configurer son environnement de travail en fonction du projet</p>
            <p className="section-content">Développer des interfaces utilisateurs</p>
            <p className="section-content">Développer des composants métiers</p>
            <p className="section-content">Contribuer à la gestion d’un projet informatique</p>
          </div>
          
          <div className="section">
            <div className="section-title diezPadding">
              <span className='cda-color diezPadding'>#02</span> | Concevoir et développer une application sécurisée organisée en couches
            </div>
            <p className="section-content">Analyser les besoins et maquetter une application</p>
            <p className="section-content">Définir l’architecture logicielle d’une application</p>
            <p className="section-content">Concevoir et mettre en place une base de données relationnelle</p>
            <p className="section-content">Développer des composants d’accès aux données SQL et NoSQL</p>
          </div>
          
          <div className="section">
            <div className="section-title diezPadding">
              <span className='cda-color diezPadding'>#03</span> | Préparer le déploiement d’une application sécurisée
            </div>
            <p className="section-content">Préparer et exécuter les plans de tests d’une application</p>
            <p className="section-content">Préparer et documenter le déploiement d’une application</p>
            <p className="section-content">Contribuer à la mise en production dans une démarche DevOps</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cda;
