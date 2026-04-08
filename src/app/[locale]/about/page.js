'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './page.module.css';

export default function About() {
  const t = useTranslations('About');
  const testimonials = t.raw('testimonials');

  return (
    <div className={styles.page}>
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className={styles.title}>{t('title')}</h1>
          {t('subtitle') && <p className={styles.subtitle}>{t('subtitle')}</p>}
        </div>
      </section>

      {/* Intro Section */}
      <section className={`section container`}>
        <div className={styles.introGrid}>
          <div className={styles.introText}>
            <span className="section-label">{t('storyLabel')}</span>
            <h2>{t('storyTitle')}</h2>
            <p>{t('storyP1')}</p>
            <p>{t('storyP2')}</p>
            <p>{t('storyP3')}</p>
            <p>{t('storyP4')}</p>
          </div>
          <div className={styles.introImage}>
            <Image 
              src="/images/about.png" 
              alt="Engineers discussing" 
              fill
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionBox}>
            <span className="section-label">{t('missionLabel')}</span>
            <h2>{t('missionTitle')}</h2>
            <p>{t('missionDesc')}</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`section ${styles.testimonialsSection}`}>
        <div className="container">
          <span className="section-label">{t('testimonialsLabel')}</span>
          <h2 className={styles.sectionTitle}>{t('testimonialsTitle')}</h2>
          
          <div className={styles.testimonialsGrid}>
            {testimonials.map((item) => (
              <div key={item.name} className={styles.testimonialCard}>
                <p className={styles.quote}>"{item.text}"</p>
                <div className={styles.author}>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
