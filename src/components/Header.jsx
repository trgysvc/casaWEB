'use client';
import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import Button from './Button';
import { Menu, X, Globe } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('Nav');
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          CASA YAPI GROUP
        </Link>
        
        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <Link href="/">{t('home')}</Link>
          <Link href="/services">{t('services')}</Link>
          <Link href="/projects">{t('projects')}</Link>
          <Link href="/about">{t('about')}</Link>
          <Link href="/contact">{t('contact')}</Link>
        </nav>

        <div className={styles.actions}>
          <div className={styles.langSwitcher}>
            <Link 
              href={pathname} 
              locale={locale === 'tr' ? 'en' : 'tr'}
              className={styles.langBtn}
            >
              <Globe size={18} />
              <span>{locale === 'tr' ? 'EN' : 'TR'}</span>
            </Link>
          </div>
          <Button href="/contact" variant={isScrolled ? 'primary' : 'white'}>
            {t('quote')}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className={styles.mobileActions}>
           <Link 
              href={pathname} 
              locale={locale === 'tr' ? 'en' : 'tr'}
              className={styles.langBtnMobile}
            >
              <span>{locale === 'tr' ? 'EN' : 'TR'}</span>
            </Link>
          <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
           <nav className={styles.mobileLinks}>
            <Link href="/" onClick={closeMenu}>{t('home')}</Link>
            <Link href="/services" onClick={closeMenu}>{t('services')}</Link>
            <Link href="/projects" onClick={closeMenu}>{t('projects')}</Link>
            <Link href="/about" onClick={closeMenu}>{t('about')}</Link>
            <Link href="/contact" onClick={closeMenu}>{t('contact')}</Link>
            <div className={styles.mobileBtn}>
              <Button href="/contact" variant="primary" onClick={closeMenu}>
                {t('quote')}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
