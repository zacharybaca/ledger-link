import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles['main-footer']}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-brand']}>
          <Link to="/" className={styles['footer-logo']}>
            MERN<span className={styles['logo-accent']}>Starter</span>
          </Link>
          <p className={styles['footer-tagline']}>
            Lightweight React + Express + MongoDB starter template.
          </p>
        </div>
      </div>

      <div className={styles['footer-bottom']}>
        <p>&copy; {currentYear} MERN Starter</p>
        <div className={styles['footer-legal']}>
          <span>Built for MERN projects</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
