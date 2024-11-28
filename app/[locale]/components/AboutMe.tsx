import React from 'react';
import "../css/AboutMe.css";
import Image from 'next/image';
import { useI18n } from "@/locales/client";
import { hind, roboto_condensed } from "../fonts/fonts";

interface AboutMeProps {
  readonly isMobile: boolean;
}

function AboutMe({ isMobile }: AboutMeProps): JSX.Element {
  const t = useI18n();

  return (
    <section id="about-me" className={`about-me ${hind.className}`}>
      <div className='avatarWrapper'>
        {!isMobile && (<div className='avatar-circle'>
          <Image
            className="avatar-circle"
            src="/photoAvatar.jpg"
            width={500}
            height={500}
            alt={t('aboutMe.avatarAlt')} 
          />
        </div>)}
        <div className='all-text-wrapper'>
          <div>
            <h1 className={`About-Title ${roboto_condensed.className}`}>{t('aboutMe.title')}</h1>
            <div className='my-name-wrapper'>
              <span>{t('aboutMe.introduction')} <span className='my-name-color'>Jean-Christophe</span></span>
            </div>

            <div className='about-me-text'>
              <p>{t('aboutMe.experience')}</p>
              <p>{t('aboutMe.reconversion')}</p>
              <p>{t('aboutMe.collaboration')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
