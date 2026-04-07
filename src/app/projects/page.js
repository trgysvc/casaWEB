'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Lightbox from '@/components/Lightbox';

export default function Projects() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    index: 0
  });

  const projects = [
    {
      id: 1,
      title: "North Campus HQ",
      category: "Commercial",
      description: "A landmark corporate headquarters featuring sustainable architecture.",
      image: "/images/hero.png"
    },
    {
      id: 2,
      title: "Peak Logistics Center",
      category: "Industrial",
      description: "State-of-the-art logistics and distribution facility.",
      image: "/images/about.png"
    },
    {
      id: 3,
      title: "Sunset Bridge",
      category: "Infrastructure",
      description: "Architectural bridge design connecting urban districts.",
      image: "/images/hero.png"
    },
    {
      id: 4,
      title: "Celestial Heights",
      category: "Residential",
      description: "Luxury residential complex redefining high-rise living.",
      image: "/images/about.png"
    },
    {
      id: 5,
      title: "Angela Residence",
      category: "Residential",
      description: "A custom-built family home focused on modern elegance.",
      image: "/images/hero.png"
    },
    {
      id: 6,
      title: "System Inq. HQ",
      category: "Commercial",
      description: "A tech-focused office development designed for innovation.",
      image: "/images/about.png"
    },
    {
      id: 7,
      title: "Brookline Water Line",
      category: "Civil Engineering",
      description: "Essential water infrastructure project for local communities.",
      image: "/images/hero.png"
    },
    {
      id: 8,
      title: "Meadowbrook Railway Station",
      category: "Infrastructure",
      description: "Modern railway transit hub integrating regional traffic.",
      image: "/images/about.png"
    },
    {
      id: 9,
      title: "Silver Crest Dam",
      category: "Civil Engineering",
      description: "Large-scale dam project for water management.",
      image: "/images/hero.png"
    }
  ];

  const openLightbox = (index) => {
    setLightbox({ isOpen: true, index });
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
  };

  const nextImage = () => {
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % projects.length });
  };

  const prevImage = () => {
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + projects.length) % projects.length });
  };

  return (
    <div className={styles.page}>
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>Building Landmarks, Creating Legacies.</p>
        </div>
      </section>

      <section className={`section container`}>
        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImageWrapper} onClick={() => openLightbox(idx)}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className={styles.projectImage}
                />
                <div className={styles.projectOverlay}>
                   <span className={styles.viewBtn}>VIEW PROJECT</span>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <span className={styles.category}>{project.category}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Lightbox 
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        images={projects}
        currentIndex={lightbox.index}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}
