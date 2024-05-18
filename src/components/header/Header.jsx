import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <nav className={styles.Header}>
      <Link to="/administrator">Administrator</Link>
      <Link to="/user">User</Link>
      <Link to="/guest">Guest</Link>

      <p style={{ marginLeft: '300px' }}>Форум Вовчок Максим ia-33</p>
    </nav>
  );
};
