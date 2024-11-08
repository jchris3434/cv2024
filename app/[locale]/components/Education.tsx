import React from 'react';
import { useI18n, useCurrentLocale } from "@/locales/client";
import "../css/Education.css";
import Image from 'next/image';
import { hind } from "../fonts/fonts";
import { roboto_condensed } from "../fonts/fonts";
import Link from 'next/link'

interface EducationProps {
  isMobile: boolean;
}

function Education({ isMobile }: EducationProps): JSX.Element {

  const locale = useCurrentLocale();

  return (
    <section id="education" className={`education-container ${hind.className}`}>
      <div className='logo-school-container'>
        <Image
          src="/beweb2.png"
          width={500}
          height={500}
          alt="School Logo"
        />
      </div>
      <h1 className={`cursus-title ${roboto_condensed.className}`}>Formation - Diplomes</h1>
      <div className='cda'>
        <div className={`cda-title ${roboto_condensed.className}`}>
          <p>2023-2024</p>
          <p className='cda-entity'>Concepteur Développeur d'Applications</p>
          <p>- option</p>
          <p className='cda-entity'>DevOps</p>
        </div>
        <p className='rncp'>RNCP niveau 6 - Bac +3/4 - Obtenu</p>
        <Link href={`/formation/cda`}>
          + de détails
        </Link>
      </div>

      <div className='dwwm'>
      <div className={`dwwm-title ${roboto_condensed.className}`}>
        <p className="dwwm-year">2022-2023</p>
        <p className='dwwm-entity'>Développeur Web & Web Mobile</p>
      </div>
        <p className='rncp'>RNCP niveau 5 - Bac +2 - Obtenu</p>
        <Link href={`/${locale}/formation/dwwm`}>
          + de détails
        </Link>
      </div>
    </section>
  )
}

export default Education