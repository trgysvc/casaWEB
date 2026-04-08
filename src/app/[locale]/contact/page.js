'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './page.module.css';
import Button from "@/components/Button";

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <div className={styles.page}>
      {/* Split Hero Section */}
      <section className={styles.splitSection}>
        <div className={styles.formContainer}>
          <div className={styles.formContent}>
            <span className={styles.sectionLabel}>{t('label')}</span>
            <h1 className={styles.title}>{t('title')}</h1>
            <p className={styles.subtitle}>{t('subtitle')}</p>
            
            <form className={styles.mainForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">{t('form.firstName')}</label>
                  <input id="firstName" type="text" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">{t('form.lastName')}</label>
                  <input id="lastName" type="text" required />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">{t('form.email')}</label>
                <input id="email" type="email" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject">{t('form.subject')}</label>
                <input id="subject" type="text" />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="timing">{t('form.timing')}</label>
                <select id="timing">
                  <option value="">{t('form.timingOptions.select')}</option>
                  <option value="asap">{t('form.timingOptions.asap')}</option>
                  <option value="1-3-months">{t('form.timingOptions.1-3')}</option>
                  <option value="6-months-plus">{t('form.timingOptions.6plus')}</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="project">{t('form.projectDesc')}</label>
                <textarea id="project" rows={3}></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>{t('form.submit')}</button>
            </form>
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <Image 
            src="/images/about_worker.png" 
            alt="Construction Worker" 
            fill
            className={styles.image}
            priority
          />
        </div>
      </section>

      {/* Dark Info Section */}
      <section className={styles.darkInfoSection}>
        <div className="container">
          <div className={styles.inquiryHeader}>
            <span className={styles.darkLabel}>{t('infoLabel')}</span>
            <h2>{t('infoTitle')}</h2>
          </div>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoBox}>
              <h3>{t('addressTitle')}</h3>
              <p>Alacamescit, İnönü Blv.</p>
              <p>D:84/Kat-1 Kuşadası/Aydın</p>
            </div>
            <div className={styles.infoBox}>
              <h3>{t('hoursTitle')}</h3>
              <p>Monday - Saturday: 08:00 - 17:00</p>
            </div>
            <div className={styles.infoBox}>
              <h3>{t('emailTitle')}</h3>
              <p>info@casayapigroup.com</p>
            </div>
            <div className={styles.infoBox}>
              <h3>{t('phoneTitle')}</h3>
              <p>+90 256 610 09 40</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subcontractor Section */}
      <section className={styles.subcontractorSection}>
        <div className="container">
          <div className={styles.subHeader}>
            <span className={styles.sectionLabel}>{t('subLabel')}</span>
            <h2>{t('subTitle')}</h2>
          </div>
          
          <form className={styles.subForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="subFirstName">{t('form.firstName')}</label>
                <input id="subFirstName" type="text" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subLastName">{t('form.lastName')}</label>
                <input id="subLastName" type="text" required />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="subEmail">{t('form.email')}</label>
                <input id="subEmail" type="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subSubject">{t('form.subject')}</label>
                <input id="subSubject" type="text" />
              </div>
            </div>
            <button type="submit" className={styles.submitBtn}>{t('form.submit')}</button>
          </form>
        </div>
      </section>
    </div>
  );
}
