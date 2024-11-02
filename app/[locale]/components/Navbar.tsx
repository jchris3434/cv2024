import { useI18n } from "@/locales/client";
import "../css/Navbar.css";
import Image from 'next/image';
import { LocaleSelect } from "./LocaleSelect";

export default function Navbar() {
    const t = useI18n();

    return (
        <header className="header">
    <div className="nav-container">
        <nav className="nav">
        <ul className="nav-list">
                    <li className="nav-item"><a href="">{t('navbar.about')}</a></li>
                    <li className="nav-item"><a href="">{t('navbar.education')}</a></li>
                    <li className="nav-item"><a href="">{t('navbar.resume')}</a></li>
                    <li className="nav-item"><a href="">{t('navbar.contact')}</a></li>
                </ul>
        </nav>
        <LocaleSelect />        
    </div>
</header>

    );
}
