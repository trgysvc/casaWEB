'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './Button';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          CASA YAPI
        </Link>
        
        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <Link href="/">HOME</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/about">ABOUT US</Link>
          <Link href="/contact">CONTACT US</Link>
        </nav>

        <div className={styles.actions}>
          <Button href="/contact" variant={isScrolled ? 'primary' : 'white'}>
            GET A QUOTE
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
           <nav className={styles.mobileLinks}>
            <Link href="/" onClick={closeMenu}>HOME</Link>
            <Link href="/services" onClick={closeMenu}>SERVICES</Link>
            <Link href="/projects" onClick={closeMenu}>PROJECTS</Link>
            <Link href="/about" onClick={closeMenu}>ABOUT US</Link>
            <Link href="/contact" onClick={closeMenu}>CONTACT US</Link>
            <div className={styles.mobileBtn}>
              <Button href="/contact" variant="primary" onClick={closeMenu}>
                GET A QUOTE
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
