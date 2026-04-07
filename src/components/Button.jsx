import styles from './Button.module.css';

export default function Button({ children, href, variant = 'primary', className = '' }) {
  const cn = `${styles.button} ${styles[variant]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={cn}>
        {children}
        <span className={styles.icon}>↘</span>
      </a>
    );
  }

  return (
    <button className={cn}>
      {children}
      <span className={styles.icon}>↘</span>
    </button>
  );
}
