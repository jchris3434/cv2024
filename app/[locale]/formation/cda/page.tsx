"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

function cda() {

  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <section>
      <button onClick={handleBackClick}>Précédent</button>
        <div>
        <p>#01 | Développer une application sécurisée</p>
        <p>Installer et configurer son environnement de travail en fonction du projet</p>
        <p>Développer des interfaces utilisateurs</p>
        <p>Développer des composants métiers</p>
        <p>Contribuer à la gestion d’un projet informatique</p>
      </div>
      <div>
        <p>#02 | Concevoir et développer une application sécurisée organisée en couches</p>
        <p>Analyser les besoins et maquetter une application</p>
        <p>Définir l’architecture logicielle d’une application</p>
        <p>Concevoir et mettre en place une base de données relationnelle</p>
        <p>Développer des composants d’accès aux données SQL et NoSQL</p>
      </div>
      <div>
        <p>#03 | Préparer le déploiement d’une application sécurisée</p>
        <p>Préparer et exécuter les plans de tests d’une application</p>
        <p>Préparer et documenter le déploiement d’une application</p>
        <p>Contribuer à la mise en production dans une démarche DevOps</p>
      </div>
    </section>
  )
}

export default cda