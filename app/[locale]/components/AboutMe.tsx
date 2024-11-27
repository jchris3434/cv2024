import React from 'react';
import "../css/AboutMe.css";
import Image from 'next/image';
import { useI18n } from "@/locales/client";
import { hind } from "../fonts/fonts";
import { roboto_condensed } from "../fonts/fonts";

interface AboutMeProps {
  isMobile: boolean;
}

function AboutMe({ isMobile }: AboutMeProps): JSX.Element {
  return (
    <section id="about-me" className={`about-me ${hind.className}`}>
      <div className='avatarWrapper'>
        {!isMobile && (<div className='avatar-circle'>
          <Image
            className="avatar-circle"
            src="/photoAvatar.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>)}
        <div className='all-text-wrapper'>
          <div>
            <h1 className={`About-Title ${roboto_condensed.className}`}>QUI SUIS-JE?</h1>
            <div className='my-name-wrapper'>
              <span>Moi, c'est <span className='my-name-color'>Jean-Christophe</span></span>
            </div>


            <div className='about-me-text'>
              <p>
                Après plus de 10 ans passé dans l'hôtellerie de luxe à l'étranger – avec des expériences en Angleterre, aux États-Unis, et en Suisse – où j'ai évolué dans des établissements haut de gamme exigeant rigueur, sérieux, et satisfaction client.
              </p>

              <p>
                De retour à Montpellier après une décennie à l'étranger, et inspiré par les grandes réflexions post-Covid, j'ai entrepris une reconversion professionnelle en 2022 pour suivre ma première passion : l'informatique. J'ai donc repris mes études et obtenu un premier diplôme de Développeur Web & Web Mobile, suivi d'un diplôme de Concepteur Développeur d'Applications (option DevOps) à l'école Beweb de Montpellier.
              </p>

              <p>
                Je serais ravi de collaborer avec vous sur tout type de projet!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
