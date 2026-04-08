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
      title: "Konya Water Treatment Plant",
      category: "Industrial Construction",
      description: "Concrete and structural works for a state-of-the-art water treatment facility implemented with advanced engineering solutions.",
      slug: "konya-artma-tesisi-betonarme-isleri",
      imageCount: 8,
      images: Array.from({ length: 8 }, (_, i) => `/images/projects/konya-artma-tesisi-betonarme-isleri/project-${i + 1}.jpeg`)
    },
    {
      id: 2,
      title: "Kuşadası Residential Project",
      category: "Residential",
      description: "A coastal residential development in Kuşadası, merging modern architecture with seaside comfort.",
      slug: "kusadas-konut-projesi",
      imageCount: 8,
      images: Array.from({ length: 8 }, (_, i) => `/images/projects/kusadas-konut-projesi/project-${i + 1}.jpeg`)
    },
    {
      id: 3,
      title: "Kuşadası Hotel Project",
      category: "Tourism / Hospitality",
      description: "Comprehensive hotel construction project focusing on luxury, aesthetics, and high-end guest experience.",
      slug: "kusadas-otel-projesi",
      imageCount: 7,
      images: Array.from({ length: 7 }, (_, i) => `/images/projects/kusadas-otel-projesi/project-${i + 1}.jpeg`)
    },
    {
      id: 4,
      title: "Kuşadası Commercial Center (Mall)",
      category: "Commercial / Retail",
      description: "Modern commercial and shopping mall project located in the heart of Kuşadası.",
      slug: "kusadas-ticari-alan-projesi-avm",
      imageCount: 8,
      images: Array.from({ length: 8 }, (_, i) => `/images/projects/kusadas-ticari-alan-projesi-avm/project-${i + 1}.jpeg`)
    },
    {
      id: 5,
      title: "Kuşadası Villa Project",
      category: "Luxury Villa",
      description: "Tailor-made luxury villa project integrated with nature, offering exclusive living spaces.",
      slug: "kusadas-villa-projesi",
      imageCount: 5,
      images: Array.from({ length: 5 }, (_, i) => `/images/projects/kusadas-villa-projesi/project-${i + 1}.jpeg`)
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // Lightbox component expect images as array of objects with certain keys
  // Let's adapt our single project images for the Lightbox component
  const lightboxImages = selectedProject ? selectedProject.images.map(img => ({
    image: img,
    title: selectedProject.title,
    category: selectedProject.category,
    description: selectedProject.description
  })) : [];

  return (
    <div className={styles.page}>
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className={styles.title}>Our Projects</h1>
          <p className={styles.subtitle}>Landmark Structures, Sustainable Future.</p>
        </div>
      </section>

      <section className={`section container`}>
        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImageWrapper} onClick={() => openLightbox(idx)}>
                <Image 
                  src={project.images[0]} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx < 3} // Mark first row as priority for faster LCP
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
                <span className={styles.photoCount}>{project.imageCount} Photos</span>
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
