'use client';
import Link from 'next/link';
import { Globe, Camera, MessageSquare, ArrowUp } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.column}>
          <h2 className={styles.logo}>CASA YAPI</h2>
          <p className={styles.description}>Reliable, High-Quality Construction for a Changing World.</p>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook"><Globe size={20} /></a>
            <a href="#" aria-label="Instagram"><Camera size={20} /></a>
            <a href="#" aria-label="LinkedIn"><MessageSquare size={20} /></a>
          </div>
        </div>
        
        <div className={styles.column}>
          <h4 className={styles.title}>Menu</h4>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>Contact</h4>
          <div className={styles.contactInfo}>
            <p>Alacamescit, İnönü Blv.</p>
            <p>D:84/Kat-1 Kuşadası/Aydın</p>
            <br />
            <p>Monday - Saturday</p>
            <p>08:00 - 17:00</p>
            <br />
            <p>info@casayapigroup.com</p>
            <p>+90 256 610 09 40</p>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContent}`}>
          <div className={styles.copy}>
            &copy; {new Date().getFullYear()} by CASA YAPI. 
            <Link href="/subcontractor" className={styles.bottomLink}>Become a subcontractor</Link>
            <Link href="/privacy" className={styles.bottomLink}>Privacy Policy</Link>
          </div>
          <button onClick={scrollToTop} className={styles.backToTop} aria-label="Back to Top">
            BACK TO TOP <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
