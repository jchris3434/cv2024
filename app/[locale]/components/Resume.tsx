import React from 'react';
import { hind } from "../fonts/fonts";
import { roboto_condensed } from "../fonts/fonts";
import "../css/Resume.css";
import Image from 'next/image';
import ButtonCvDownload from './ButtonCvDownload';
import { useI18n } from "@/locales/client";

interface ResumeProps {
  isMobile: boolean;
}

function Resume({ isMobile }: ResumeProps): JSX.Element {
  const t = useI18n();

  return (
    <section className={`resume-section ${hind.className}`}>
      <div className='resume-title-wrapper'>
        <h3 className={`resume-title ${roboto_condensed.className}`}>
          {t('resume.professionalSkills')}
        </h3>
        <ButtonCvDownload
          url="/CV2024FR.pdf"
          filename="CV2024FR.pdf"
          className="button-cv"
        />
      </div>

      <div className='resume-container'>
        <div className='all-skills'>
          <div className='hard-skills'>
            <h1 className='skills-titles'>{t('resume.hardSkills')}</h1>
            <Image
              className="hard-skills-icones"
              src="/hard-skills-dark.png"
              width={500}
              height={500}
              alt={t('resume.hardSkillsIconAlt')}
            />
          </div>

          <div>
            <h1 className='soft-skills-title'>{t('resume.softSkills')}</h1>

            <div className='soft-skills'>
              <div className='languages'>
                <h2 className='languages-title'>{t('resume.languages.title')}</h2>
                <ul className='languages-list'>
                  <li>{t('resume.languages.french')}</li>
                  <li>{t('resume.languages.english')}</li>
                  <li>{t('resume.languages.spanish')}</li>
                </ul>
              </div>

              <div className='interpersonal-skills'>
                <ul>
                  <li>{t('resume.interpersonalSkills.analysis')}</li>
                  <li>{t('resume.interpersonalSkills.teamwork')}</li>
                  <li>{t('resume.interpersonalSkills.organization')}</li>
                  <li>{t('resume.interpersonalSkills.curiosity')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='experience-container'>
          <div className='experience-main-title'>{t('resume.experience.title')}</div>

          <div className='experience-wrapper'>
            <h1 className={`experience-title ${roboto_condensed.className}`}>
              {t('resume.experience.exaprint.title')}
            </h1>
            <h3 className={`experience-subtitle ${roboto_condensed.className}`}>
              {t('resume.experience.exaprint.subtitle')}
            </h3>
            <p className='experience-text'>{t('resume.experience.exaprint.description')}</p>
          </div>

          <div className='experience-wrapper'>
            <h1 className={`experience-title ${roboto_condensed.className}`}>
              {t('resume.experience.beweb.title')}
            </h1>
            <h3 className={`experience-subtitle ${roboto_condensed.className}`}>
              {t('resume.experience.beweb.subtitle')}
            </h3>
            <p className='experience-text'>{t('resume.experience.beweb.description')}</p>
          </div>

          <div className='experience-wrapper'>
            <h1 className={`experience-title ${roboto_condensed.className}`}>
              {t('resume.experience.osmova.title')}
            </h1>
            <h3 className={`experience-subtitle ${roboto_condensed.className}`}>
              {t('resume.experience.osmova.subtitle')}
            </h3>
            <p className='experience-text'>{t('resume.experience.osmova.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
