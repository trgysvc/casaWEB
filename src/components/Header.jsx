'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './Button';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          CASA YAPI
        </Link>
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
      </div>
    </header>
  );
}
