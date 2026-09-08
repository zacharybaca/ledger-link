import React from 'react';
import styles from './Header.module.css';

const Header = ({ title, subtitle }) => {
  return (
    <header className={styles['page-header']}>
      <div className={styles['header-overlay']}>
        <h1 className={styles['header-title']}>{title}</h1>
        {subtitle && <p className={styles['header-subtitle']}>{subtitle}</p>}
      </div>
    </header>
  );
};

export default Header;
