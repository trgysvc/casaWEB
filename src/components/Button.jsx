import { Link } from '@/i18n/routing';
import styles from './Button.module.css';

export default function Button({ children, href, variant = 'primary', className = '', onClick }) {
  const cn = `${styles.button} ${styles[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={cn} onClick={onClick}>
        {children}
        <span className={styles.icon}>↘</span>
      </Link>
    );
  }

  return (
    <button className={cn}>
      {children}
      <span className={styles.icon}>↘</span>
    </button>
  );
}
