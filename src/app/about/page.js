'use client';
import Image from 'next/image';
import styles from './page.module.css';

export default function About() {
  const testimonials = [
    {
      name: "Christopher Ramirez",
      text: "CASA YAPI transformed our vision into reality. Their attention to detail and commitment to deadlines is unparalleled in the industry.",
      role: "CEO, TechPark Innovations"
    },
    {
      name: "Marcus Thompson",
      text: "The team's professional approach to site management and quality control made our complex infrastructure project a smooth success.",
      role: "Director of Urban Planning"
    },
    {
      name: "Aisha Patel",
      text: "Reliability is hard to find, but CASA YAPI delivers it every time. They are our go-to partner for all commercial developments.",
      role: "Founder, GreenEdge Living"
    }
  ];

  return (
    <div className={styles.page}>
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.subtitle}>Building a Better Future Since 2010.</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={`section container`}>
        <div className={styles.introGrid}>
          <div className={styles.introText}>
            <span className="section-label">Our Story</span>
            <h2>We Build for People.</h2>
            <p>
              Casa Yapı Group manages all steps from project development to turnkey completion in commercial and residential construction projects with its professional teams.
            </p>
            <p>
              Our commitment to excellence and high-quality workmanship has made us a leader in the sector. We are proud of our ability to manage complex projects from start to finish.
            </p>
            <p>
              With 7 large-scale projects completed to date, we have established a reliable application experience on a regional scale.
            </p>
            <p>
              We ensure safety, quality, and transparency by taking full responsibility in every project.
            </p>
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
            <span className="section-label">Our Mission</span>
            <h2>Building a Sustainable Future</h2>
            <p>
              At CASA YAPI, we prioritize sustainable construction practices that minimize environmental impact 
              while maximizing long-term value for our clients and communities. We believe in innovation that respects the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`section ${styles.testimonialsSection}`}>
        <div className="container">
          <span className="section-label">Testimonials</span>
          <h2 className={styles.sectionTitle}>What People Say</h2>
          
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
