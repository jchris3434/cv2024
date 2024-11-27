"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useI18n } from "@/locales/client";
import "./cda.css";
import { hind } from "../../fonts/fonts";
import { roboto_condensed } from '../../fonts/fonts';

function Cda() {
  const router = useRouter();
  const t = useI18n();  // Hook pour accéder aux traductions

  const handleBackClick = () => {
    router.back();
  };

  return (
    <section className={`cda-page ${roboto_condensed.className}`}>
      <button className='button-cda' onClick={handleBackClick}>{t("cda.previous")}</button>
      <div className="content-container">
        
        <div className='cda-cursus-title section-title'>
          <p className='cda-color cda-title'>{t("cda.title")}</p>
          <div className='devopsOption'>
            <span>{t("cda.option")}</span><span className='devops'>{t("cda.devops")}</span>
          </div>
        </div>
        
        <div className='cursus-container'>           
          <div className="section">
            <div className="section-title diezPadding">
              <span className='cda-color diezPadding'>#01</span> | {t("cda.section1_title")}
            </div>
            <p className="section-content">{t("cda.section1_content1")}</p>
            <p className="section-content">{t("cda.section1_content2")}</p>
            <p className="section-content">{t("cda.section1_content3")}</p>
            <p className="section-content">{t("cda.section1_content4")}</p>
          </div>
          
          <div className="section">
            <div className="section-title diezPadding">
              <span className='cda-color diezPadding'>#02</span> | {t("cda.section2_title")}
            </div>
            <p className="section-content">{t("cda.section2_content1")}</p>
            <p className="section-content">{t("cda.section2_content2")}</p>
            <p className="section-content">{t("cda.section2_content3")}</p>
            <p className="section-content">{t("cda.section2_content4")}</p>
          </div>
          
          <div className="section">
            <div className="section-title diezPadding">
              <span className='cda-color diezPadding'>#03</span> | {t("cda.section3_title")}
            </div>
            <p className="section-content">{t("cda.section3_content1")}</p>
            <p className="section-content">{t("cda.section3_content2")}</p>
            <p className="section-content">{t("cda.section3_content3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cda;
