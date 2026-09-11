import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles['main-nav']}>
      <div className={styles['nav-container']}>
        <Link to="/" className={styles['nav-logo-link']}>
          <img src="/app-logo.png" alt="LedgerLink Logo" className={styles['nav-logo-svg']} />
        </Link>
      </div>
      <ul className={styles['nav-links']}>
          <li>
            <Link to="/" className={styles['nav-item']}>
             🏠 Home
            </Link>
          </li>
          <li>
            <Link to="/transactions" className={styles['nav-item']}>
             📈 Transaction Dashboard
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles['nav-item']}>
             ℹ️ About
            </Link>
          </li>
        </ul>
    </nav>
  );
};

export default NavBar;
