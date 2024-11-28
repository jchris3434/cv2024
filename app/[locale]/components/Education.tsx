import React from 'react';
import { useI18n, useCurrentLocale } from "@/locales/client";
import "../css/Education.css";
import Image from 'next/image';
import { hind, roboto_condensed } from "../fonts/fonts";
import Link from 'next/link';

interface EducationProps {
  readonly isMobile: boolean;
}

function Education({ isMobile }: EducationProps): JSX.Element {
  const t = useI18n();
  const locale = useCurrentLocale();

  return (
    <section id="education" className={`education-container ${hind.className}`}>
      <div className='logo-school-container'>
        <Image
          src="/bewebLogoDark.png"
          width={500}
          height={500}
          alt={t('education.schoolLogoAlt')}
        />
      </div>
      <div className='main-text-education'>
        <h1 className={`cursus-title ${roboto_condensed.className}`}>
          {t('education.title')}
        </h1>
        {!isMobile ? (
          <div className={`cda-title ${roboto_condensed.className}`}>
            <p>2023-2024</p>
            <p className='cda-entity'>{t('education.cda.title')}</p>
            <p>- {t('education.cda.option')}</p>
            <p className='cda-entity'>{t('education.cda.devops')}</p>
          </div>
        ) : (
          <div className='cda'>
            <div className={`cda-title ${roboto_condensed.className}`}>
              <div className='cda-flex'>
                <p className='cda-entity'>{t('education.cda.title')}</p>
              </div>
            </div>
            <div className='devopsOption'>
              <p>{t('education.cda.option')}</p>
              <p className='cda-entity'>{t('education.cda.devops')}</p>
            </div>
          </div>
        )}

        <p className='rncp'>{t('education.cda.rncp')}</p>
        <Link className='more-details' href={`/formation/cda`}>
          {t('education.moreDetails')}
        </Link>

        <div className='dwwm'>
          <div className={`dwwm-title ${roboto_condensed.className}`}>
            {!isMobile && <p className="dwwm-year">2022-2023</p>}
            <p className='dwwm-entity'>{t('education.dwwm.title')}</p>
          </div>
          <p className='rncp'>{t('education.dwwm.rncp')}</p>
          <Link className='more-details' href={`/${locale}/formation/dwwm`}>
            {t('education.moreDetails')}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Education;
