'use client';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import styles from './Lightbox.module.css';
import { useEffect } from 'react';

export default function Lightbox({ isOpen, onClose, images, currentIndex, onNext, onPrev }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentProject = images[currentIndex];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button className={styles.closeBtn} onClick={onClose}>
        <X size={32} />
      </button>
      
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.navBtn} onClick={onPrev}>
          <ChevronLeft size={48} />
        </button>
        
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image 
              src={currentProject.image || "/images/hero.png"} 
              alt={currentProject.title}
              fill
              sizes="(max-width: 1200px) 100vw, 80vw"
              priority // Lightbox images should load fast
              className={styles.image}
            />
          </div>
          <div className={styles.info}>
            <h3>{currentProject.title}</h3>
            <p>{currentProject.category} | {currentProject.description}</p>
          </div>
        </div>

        <button className={styles.navBtn} onClick={onNext}>
          <ChevronRight size={48} />
        </button>
      </div>

      <div className={styles.counter}>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
