'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './page.module.css';
import Lightbox from '@/components/Lightbox';

export default function Projects() {
  const t = useTranslations('Projects');
  const tp = useTranslations('Projects.items');

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      slug: "konya-artma-tesisi-betonarme-isleri",
      imageCount: 8,
      images: Array.from({ length: 8 }, (_, i) => `/images/projects/konya-artma-tesisi-betonarme-isleri/project-${i + 1}.jpeg`)
    },
    {
      id: 2,
      slug: "kusadas-konut-projesi",
      imageCount: 8,
      images: Array.from({ length: 8 }, (_, i) => `/images/projects/kusadas-konut-projesi/project-${i + 1}.jpeg`)
    },
    {
      id: 3,
      slug: "kusadas-otel-projesi",
      imageCount: 7,
      images: Array.from({ length: 7 }, (_, i) => `/images/projects/kusadas-otel-projesi/project-${i + 1}.jpeg`)
    },
    {
      id: 4,
      slug: "kusadas-ticari-alan-projesi-avm",
      imageCount: 8,
      images: Array.from({ length: 8 }, (_, i) => `/images/projects/kusadas-ticari-alan-projesi-avm/project-${i + 1}.jpeg`)
    },
    {
      id: 5,
      slug: "kusadas-villa-projesi",
      imageCount: 5,
      images: Array.from({ length: 5 }, (_, i) => `/images/projects/kusadas-villa-projesi/project-${i + 1}.jpeg`)
    }
  ];

  const openLightbox = (projectIndex) => {
    setSelectedProject(projects[projectIndex]);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  const lightboxImages = selectedProject ? selectedProject.images.map(img => ({
    image: img,
    title: tp(`${selectedProject.slug}.title`),
    category: tp(`${selectedProject.slug}.category`),
    description: tp(`${selectedProject.slug}.desc`)
  })) : [];

  return (
    <div className={styles.page}>
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className={styles.title}>{t('label')}</h1>
          <p className={styles.subtitle}>{t('title')}</p>
        </div>
      </section>

      <section className={`section container`}>
        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImageWrapper} onClick={() => openLightbox(idx)}>
                <Image 
                  src={project.images[0]} 
                  alt={tp(`${project.slug}.title`)} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx < 3}
                  className={styles.projectImage}
                />
                <div className={styles.projectOverlay}>
                   <span className={styles.viewBtn}>{t('viewProject')}</span>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <span className={styles.category}>{tp(`${project.slug}.category`)}</span>
                <h2>{tp(`${project.slug}.title`)}</h2>
                <p>{tp(`${project.slug}.desc`)}</p>
                <span className={styles.photoCount}>{project.imageCount} {t('photos')}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Lightbox 
        isOpen={!!selectedProject}
        onClose={closeLightbox}
        images={lightboxImages}
        currentIndex={currentImageIndex}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}
