"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useI18n } from "@/locales/client";
import "../cda/cda.css";
import { hind } from "../../fonts/fonts";
import { roboto_condensed } from '../../fonts/fonts';

function Dwwm() {
  const router = useRouter();
  const t = useI18n();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <section className={`cda-page ${roboto_condensed.className}`}>
      <button className='button-cda' onClick={handleBackClick}>{t("dwwm.previous")}</button>
      <div className="content-container">

        <div className='cda-cursus-title section-title'>
          <p className='cda-color cda-title'>{t("dwwm.title")}</p>
        </div>

        <div className='cursus-container'>
          <div className="section">
            <div className="section-title diezPadding">
              <span className='cda-color diezPadding'>#01</span> | {t("dwwm.section1_title")}
            </div>
            <p className="section-content">{t("dwwm.section1_content1")}</p>
            <p className="section-content">{t("dwwm.section1_content2")}</p>
            <p className="section-content">{t("dwwm.section1_content3")}</p>
            <p className="section-content">{t("dwwm.section1_content4")}</p>
            <p className="section-content">{t("dwwm.section1_content5")}</p>
          </div>

          <div className="section">
            <div className="section-title diezPadding">
              <span className='cda-color diezPadding'>#02</span> | {t("dwwm.section2_title")}
            </div>
            <p className="section-content">{t("dwwm.section2_content1")}</p>
            <p className="section-content">{t("dwwm.section2_content2")}</p>
            <p className="section-content">{t("dwwm.section2_content3")}</p>
            <p className="section-content">{t("dwwm.section2_content4")}</p>
            <p className="section-content">{t("dwwm.section2_content5")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dwwm;
