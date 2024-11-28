import React from 'react';
import "../css/Contact.css";
import Image from 'next/image';
import { hind, roboto_condensed } from "../fonts/fonts";
import ButtonCvDownload from './ButtonCvDownload';
import Link from 'next/link';
import { useI18n } from "@/locales/client";

interface ContactProps {
  readonly isMobile: boolean;
}

function Contact({ isMobile }: ContactProps): JSX.Element {
  const t = useI18n(); // Importation de la fonction de traduction

  return (
    <section className={`contact-me ${hind.className}`}>
      <div className='camion'>

        {!isMobile ? (
          <h1 className={`contact-title ${roboto_condensed.className} custom-h1`}>
            <span className="custom-span">{t('contact.title.part1')}</span>
            <span className="custom-span custom-span2">{t('contact.title.part2')}</span>
            <div className="custom-scroll-more">↓</div>
          </h1>
        ) : (
          <p className={`contact-me-title-mobile ${hind.className}`}>{t('contact.mobileTitle')}</p>
        )}

        <div className="container-contact">
          <div className="profile-container">
            <div className="profile-wrapper">
              <div className="profile-card">
                <div className="fav-icon">
                  <i className="far fa-heart"></i>
                </div>

                <Image
                  className="avatar-image"
                  src="/avatar-circle.png"
                  width={500}
                  height={500}
                  alt={t('contact.avatarAlt')}
                />

                <h2 className='contact-text-color'>{t('contact.name')}</h2>
                <h4 className='contact-text-color'>{t('contact.role')}</h4>

                <div className="icons">
                  <i className="fab">
                    <Link href="https://www.linkedin.com/in/jean-christophe-fontaine-307749269/" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/icones/linkedin.png"
                        width={500} 
                        height={500}
                        alt={t('contact.linkedinAlt')}
                      />
                    </Link>
                  </i>
                  <i className="fab">
                    <Link href="mailto:jc.fontaine34@gmail.com" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/icones/google.png"
                        width={500} 
                        height={500}
                        alt={t('contact.googleAlt')}
                      />
                    </Link>
                  </i>
                  <i className="fab">
                    <Link href="https://github.com/jchris3434?tab=repositories" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/icones/github.png"
                        width={500} 
                        height={500}
                        alt={t('contact.githubAlt')}
                      />
                    </Link>
                  </i>
                </div>

                <ButtonCvDownload
                  url="/CV2024FR.pdf"
                  filename="CV2024FR.pdf"
                  className="bobo"
                />

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
