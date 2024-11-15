import React from 'react';
import { hind } from "../fonts/fonts";
import { roboto_condensed } from "../fonts/fonts";
import "../css/Resume.css";
import Image from 'next/image';

interface ResumeProps {
  isMobile: boolean;
}

function Resume({ isMobile }: ResumeProps): JSX.Element {

  const myResume = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={`resume-section ${hind.className}`}>
      <div className='resume-title-wrapper'>
        <h3 className={`resume-title ${roboto_condensed.className}`}>COMPETENCES PROFESSIONELLES</h3>
        <button
          onClick={() => myResume("/CV2024FR.pdf", "CV2024FR.pdf")}
          className='button-cv'
        >
          Télécharger mon CV
        </button>

      </div>

      <div className='resume-container'>
        <div className='all-skills'>
          <div className='hard-skills'>
            <h1 className='skills-titles'>Hard Skills</h1>
            <Image
              className="hard-skills-icones"
              src="/hard-skills.png"
              width={500}
              height={500}
              alt="hard-skills-icones"
            />
          </div>

          <div>
            <h1 className='skills-titles'>Soft Skills</h1>

            <div className='soft-skills'>
              <div className='languages'>
                <h2 className='languages-title'>Langues</h2>
                <ul className='languages-list'>
                  <li>Français (Maternelle)</li>
                  <li>Anglais (Courant)</li>
                  <li>Espagnol (Courant)</li>
                </ul>
              </div>

              <div className='interpersonal-skills'>
                <ul>
                  <li>Esprit d'analyse</li>
                  <li>Travail en équipe</li>
                  <li>Sens de l'organisation, Rigueur</li>
                  <li>Curiosité</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div className='experience-container'>
          <div className='experience-main-title'>Expérience Numériques</div>
          <div className='experience-wrapper'>
            <h1 className={`experience-title ${roboto_condensed.className}`}>Développeur Front End | Montpellier</h1>
            <h3 className={`experience-subtitle ${roboto_condensed.className}`}>Exaprint | Alternance sep 2023 - sep 2024</h3>
            <p className={`experience-text`}>Entretien et mise à jour continue de nouvelles fonctionnalités pour le site e-commerce, en fonction d’analyses ContentSquare et AB test.
              Principalement en React.js, TypeScript, GraphQL, mais aussi en PHP et jQuery pour certaines parties du site.
              Travail en méthode Agile.
            </p>
          </div>

          <div className='experience-wrapper'>
            <h1 className={`experience-title ${roboto_condensed.className}`}>Projet CDA Ecole Beweb | Montpellier</h1>
            <h3 className={`experience-subtitle ${roboto_condensed.className}`}>Création d’un CMS avec Node.js, MySQL, et React</h3>
            <p className={`experience-text`}>Gestion de stagiaires, planification de tickets.
              Conception, diagrammes, maquettage.
              Tests unitaires, tests de charge.
              Intégration de SonarQube, pipelines GitLab.
              Déploiement avec Kubernetes.
              Mise en place de monitoring et alerting avec Prometheus et Grafana.
            </p>
          </div>

          <div className='experience-wrapper'>
            <h1 className={`experience-title ${roboto_condensed.className}`}>Développeur Full Stack | Montpellier</h1>
            <h3 className={`experience-subtitle ${roboto_condensed.className}`}>Osmova - Agence Digitale | Stage déc 2022 - Fév 2023</h3>
            <p className={`experience-text`}>Création d'une application de gestion de clients et création de devis avec Node.JS 16 et feather.js pour l'API REST en back,
              et Quasar Vue.js 3 et ORM Pinia en front.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Resume