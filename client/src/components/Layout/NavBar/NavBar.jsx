import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles['main-nav']}>
      <div className={styles['nav-container']}>
        <Link to="/" className={styles['nav-logo-link']}>
          <h1>MERN Starter</h1>
        </Link>

        <ul className={styles['nav-links']}>
          <li>
            <Link to="/" className={styles['nav-item']}>
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
