'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import {
  Building2,
  Home as HomeIcon,
  Compass,
  HardHat,
  ChevronRight
} from "lucide-react";
import Button from "@/components/Button";
import styles from "./page.module.css";

export default function Home() {
  const t = useTranslations('Home');
  const tp = useTranslations('Projects.items');
  const ts = useTranslations('Services');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.isVisible);
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll(`.${styles.reveal}`);
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const featuredProjects = [
    { 
      title: tp('konya-artma-tesisi-betonarme-isleri.title'), 
      image: "/images/projects/konya-artma-tesisi-betonarme-isleri/project-1.jpeg" 
    },
    { 
      title: tp('kusadas-konut-projesi.title'), 
      image: "/images/projects/kusadas-konut-projesi/project-1.jpeg" 
    },
    { 
      title: tp('kusadas-otel-projesi.title'), 
      image: "/images/projects/kusadas-otel-projesi/project-1.jpeg" 
    }
  ];

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent} ${styles.reveal}`}>
          <h1 className={styles.heroTitle}>{t('heroTitle')}</h1>
          <div className={styles.heroActions}>
            <Button href="/contact" variant="primary">
              {t('readMore')} <ChevronRight size={16} className={styles.btnIcon} />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Split Reversed */}
      <section className={`section ${styles.aboutSection} ${styles.reveal}`}>
        <div className={`container ${styles.aboutGrid}`}>
          <div className={styles.aboutText}>
            <span className={styles.sectionLabel}>{t('aboutLabel')}</span>
            <p className={styles.aboutDescription}>
              {t('aboutDesc')}
            </p>
            <Button href="/about" variant="dark">
              {t('readMore')} <ChevronRight size={16} className={styles.btnIcon} />
            </Button>
          </div>
          <div className={styles.aboutImageContainer}>
            <Image
              src="/images/about_worker.png"
              alt="Construction Professional"
              fill
              className={styles.aboutImage}
            />
          </div>
        </div>
      </section>

      {/* Services Preview - 3 Column Layout */}
      <section className={`section ${styles.servicesSection} ${styles.reveal}`}>
        <div className="container">
          <div className={styles.servicesGridMain}>
            <div className={styles.servicesHeader}>
              <span className={styles.sectionLabel}>{t('servicesLabel')}</span>
              <h2 className={styles.sectionTitle}>{t('servicesTitle')}</h2>
              <Link href="/services" className={styles.allServicesBtn}>
                {t('allServices')} <ChevronRight size={16} />
              </Link>
            </div>

            <div className={styles.servicesGridItems}>
              <div className={styles.serviceBox}>
                <Building2 className={styles.serviceIcon} size={40} strokeWidth={1.5} />
                <h3>{ts('INDUSTRIAL FACILITY PROJECTS.title')}</h3>
                <p>{ts('INDUSTRIAL FACILITY PROJECTS.desc')}</p>
              </div>
              <div className={styles.serviceBox}>
                <HomeIcon className={styles.serviceIcon} size={40} strokeWidth={1.5} />
                <h3>{ts('RESIDENTIAL PROJECTS.title')}</h3>
                <p>{ts('RESIDENTIAL PROJECTS.desc')}</p>
              </div>
              <div className={styles.serviceBox}>
                <Compass className={styles.serviceIcon} size={40} strokeWidth={1.5} />
                <h3>{ts('CONSTRUCTION CONTRACTING SERVICES.title')}</h3>
                <p>{ts('CONSTRUCTION CONTRACTING SERVICES.desc')}</p>
              </div>
              <div className={styles.serviceBox}>
                <HardHat className={styles.serviceIcon} size={40} strokeWidth={1.5} />
                <h3>{ts('LAND VALUATION SERVICES.title')}</h3>
                <p>{ts('LAND VALUATION SERVICES.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className={`${styles.statsSection} ${styles.reveal}`}>
        <div className={`container ${styles.statsGrid}`}>
          <div className={styles.statItem}>
            <h3 className={styles.statNumber}>1</h3>
            <p>{t('stats.inProgress')}</p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.statNumber}>7</h3>
            <p>{t('stats.completed')}</p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.statNumber}>45</h3>
            <p>{t('stats.partners')}</p>
          </div>
        </div>
      </section>

      {/* Featured Projects Slider Header */}
      <section className={`section ${styles.featuredHeader} ${styles.reveal}`}>
        <div className="container">
          <span className={styles.sectionLabel}>{t('featuredLabel')}</span>
          <h2 className={styles.sectionTitle}>{t('featuredTitle')}</h2>
        </div>
      </section>

      {/* Project Grid / Slider Simulation */}
      <section className={`${styles.projectSection} ${styles.reveal}`}>
        <div className="container">
          <div className={styles.projectGrid}>
            {featuredProjects.map((project) => (
              <div key={project.title} className={styles.projectCard}>
                <div className={styles.projectImageWrapper}>
                  <Image src={project.image} alt={project.title} fill className={styles.projectImage} />
                </div>
                <div className={styles.projectInfo}>
                  <h3>{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.centerAction}>
            <Button href="/projects" variant="dark">{t('allProjects')}</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
