import "../css/Navbar.css";
import Image from 'next/image';
import { useRouter } from "next/compat/router";
import { useTranslation } from 'next-i18next';

export default function Navbar() {
    const router = useRouter();

    const changeLanguage = (locale: string) => {
        router?.push(router.pathname, router.asPath, { locale });
    };

    const { t } = useTranslation('common');

    return (
        <header className="header">
    <div className="nav-container">
        <nav className="nav">
        <ul className="nav-list">
                    <li className="nav-item"><a href="">{t('about')}</a></li>
                    <li className="nav-item"><a href="">{t('education')}</a></li>
                    <li className="nav-item"><a href="">{t('resume')}</a></li>
                    <li className="nav-item"><a href="">{t('contact')}</a></li>
                </ul>
        </nav>
        <nav className="navFlag">
            <button onClick={() => changeLanguage('en')}>
                <Image
                    src="/icones/ukFlag.png"
                    width={25}
                    height={25}
                    alt="English"
                />
            </button>
            <button onClick={() => changeLanguage('fr')}>
                <Image
                    className="frenchFlag"
                    src="/icones/frFlag.png"
                    width={27}
                    height={27}
                    alt="Français"
                />
            </button>
        </nav>
    </div>
</header>

    );
}
