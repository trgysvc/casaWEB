'use client';
import Image from 'next/image';
import styles from './page.module.css';

export default function Contact() {
  return (
    <div className={styles.page}>
      {/* Split Hero Section */}
      <section className={styles.splitSection}>
        <div className={styles.formContainer}>
          <div className={styles.formContent}>
            <span className={styles.sectionLabel}>GET A QUOTE</span>
            <h1 className={styles.title}>Request a Quote for <br/> Your Next Project</h1>
            <p className={styles.subtitle}>We'll get back to you shortly</p>
            
            <form className={styles.mainForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First name *</label>
                  <input id="firstName" type="text" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last name *</label>
                  <input id="lastName" type="text" required />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input id="email" type="email" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="timing">When are you looking to start?</label>
                <select id="timing">
                  <option value="">Select...</option>
                  <option value="asap">ASAP</option>
                  <option value="1-3-months">1-3 Months</option>
                  <option value="6-months-plus">6 months and up</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="project">What do you want to build/repair?</label>
                <textarea id="project" rows={3}></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>GET A QUOTE</button>
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
            <span className={styles.darkLabel}>CONTACT US</span>
            <h2>For any inquiries or questions:</h2>
          </div>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoBox}>
              <h3>ADDRESS</h3>
              <p>Alacamescit, İnönü Blv.</p>
              <p>D:84/Kat-1 Kuşadası/Aydın</p>
            </div>
            <div className={styles.infoBox}>
              <h3>OFFICE HOURS</h3>
              <p>Monday - Saturday: 08:00 - 17:00</p>
            </div>
            <div className={styles.infoBox}>
              <h3>EMAIL</h3>
              <p>info@casayapigroup.com</p>
            </div>
            <div className={styles.infoBox}>
              <h3>PHONE</h3>
              <p>+90 256 610 09 40</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subcontractor Section */}
      <section className={styles.subcontractorSection}>
        <div className="container">
          <div className={styles.subHeader}>
            <span className={styles.sectionLabel}>WORK WITH US</span>
            <h2>Become a Subcontractor</h2>
          </div>
          
          <form className={styles.subForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="subFirstName">First name *</label>
                <input id="subFirstName" type="text" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subLastName">Last name *</label>
                <input id="subLastName" type="text" required />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="subEmail">Email *</label>
                <input id="subEmail" type="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subSubject">Subject</label>
                <input id="subSubject" type="text" />
              </div>
            </div>
            <button type="submit" className={styles.submitBtn}>GET A QUOTE</button>
          </form>
        </div>
      </section>
    </div>
  );
}
