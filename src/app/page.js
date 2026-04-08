'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
    { title: "Konya Water Treatment Plant", category: "Industrial", image: "/images/projects/konya-artma-tesisi-betonarme-isleri/project-1.jpeg" },
    { title: "Kuşadası Residential Project", category: "Residential", image: "/images/projects/kusadas-konut-projesi/project-1.jpeg" },
    { title: "Kuşadası Hotel Project", category: "Tourism", image: "/images/projects/kusadas-otel-projesi/project-1.jpeg" }
  ];

  const clients = [
    "OAK HILLS CITY", "BRONFMAN HOTEL", "NEST MEDICAL", "SHAWNS",
    "Latch.", "STOCKET"
  ];

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent} ${styles.reveal}`}>
          <h1 className={styles.heroTitle}>Correct Planning, <br /> Strong Execution, Reliable Results</h1>
          <div className={styles.heroActions}>
            <Button href="/contact" variant="primary">
              GET A QUOTE <ChevronRight size={16} className={styles.btnIcon} />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Split Reversed */}
      <section className={`section ${styles.aboutSection} ${styles.reveal}`}>
        <div className={`container ${styles.aboutGrid}`}>
          <div className={styles.aboutText}>
            <span className={styles.sectionLabel}>ABOUT OUR COMPANY</span>
            <p className={styles.aboutDescription}>
              We operate in the fields of industrial and residential projects,
              land-for-construction applications, and construction contracting services.
            </p>
            <Button href="/about" variant="dark">
              READ MORE <ChevronRight size={16} className={styles.btnIcon} />
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
              <span className={styles.sectionLabel}>OUR SERVICES</span>
              <h2 className={styles.sectionTitle}>We Offer a Range of Services to Meet All Types of Needs</h2>
              <Link href="/services" className={styles.allServicesBtn}>
                ALL SERVICES <ChevronRight size={16} />
              </Link>
            </div>

            <div className={styles.servicesGridItems}>
              <div className={styles.serviceBox}>
                <Building2 className={styles.serviceIcon} size={40} strokeWidth={1.5} />
                <h3>Industrial Facility Projects</h3>
                <p>Describe the service and how customers or clients can benefit from it.</p>
              </div>
              <div className={styles.serviceBox}>
                <HomeIcon className={styles.serviceIcon} size={40} strokeWidth={1.5} />
                <h3>Residential Projects</h3>
                <p>Describe the service and how customers or clients can benefit from it.</p>
              </div>
              <div className={styles.serviceBox}>
                <Compass className={styles.serviceIcon} size={40} strokeWidth={1.5} />
                <h3>Construction Contracting Services</h3>
                <p>Describe the service and how customers or clients can benefit from it.</p>
              </div>
              <div className={styles.serviceBox}>
                <HardHat className={styles.serviceIcon} size={40} strokeWidth={1.5} />
                <h3>Land Valuation Services</h3>
                <p>Describe the service and how customers or clients can benefit from it.</p>
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
            <p>In-Progress Sites</p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.statNumber}>7</h3>
            <p>Projects Completed</p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.statNumber}>45</h3>
            <p>Business Partners</p>
          </div>
        </div>
      </section>

      {/* Featured Projects Slider Header */}
      <section className={`section ${styles.featuredHeader} ${styles.reveal}`}>
        <div className="container">
          <span className={styles.sectionLabel}>FEATURED PROJECTS</span>
          <h2 className={styles.sectionTitle}>We Build Projects That Last</h2>
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
            <Button href="/projects" variant="dark">ALL PROJECTS</Button>
          </div>
        </div>
      </section>

    </div>
  );
}
