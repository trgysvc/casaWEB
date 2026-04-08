'use client';
import { Link, usePathname } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import { Globe, Camera, MessageSquare, ArrowUp } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const tNav = useTranslations('Nav');
  const tFooter = useTranslations('Footer');
  const tContact = useTranslations('Contact');
  const locale = useLocale();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.column}>
          <h2 className={styles.logo}>CASA YAPI GROUP</h2>
          <p className={styles.description}>{tFooter('tagline')}</p>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook"><Globe size={20} /></a>
            <a href="#" aria-label="Instagram"><Camera size={20} /></a>
            <a href="#" aria-label="LinkedIn"><MessageSquare size={20} /></a>
          </div>
        </div>
        
        <div className={styles.column}>
          <h4 className={styles.title}>{tFooter('links')}</h4>
          <nav className={styles.nav}>
            <Link href="/">{tNav('home')}</Link>
            <Link href="/services">{tNav('services')}</Link>
            <Link href="/projects">{tNav('projects')}</Link>
            <Link href="/about">{tNav('about')}</Link>
            <Link href="/contact">{tNav('contact')}</Link>
          </nav>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>{tNav('contact')}</h4>
          <div className={styles.contactInfo}>
            <p>{tContact('addressTitle')}:</p>
            <p>Alacamescit, İnönü Blv.</p>
            <p>D:84/Kat-1 Kuşadası/Aydın</p>
            <br />
            <p>info@casayapigroup.com</p>
            <p>+90 256 610 09 40</p>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContent}`}>
          <div className={styles.copy}>
            &copy; {new Date().getFullYear()} CASA YAPI GROUP. {tFooter('rights')}
          </div>
          <button onClick={scrollToTop} className={styles.backToTop} aria-label="Back to Top">
            {locale === 'tr' ? 'BAŞA DÖN' : 'BACK TO TOP'} <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
