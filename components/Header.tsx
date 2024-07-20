// components/Header.tsx
import React from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <h1>S.M Industries</h1>
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li>
              <a href="#">Services</a>
              <ul className={styles.submenu}>
                <li><a href="/services/industrial-shed">Industrial Shed Fabrication</a></li>
                <li><a href="/services/cup-lock">Cup Lock Scaffolding</a></li>
                <li><a href="/services/scaffolding-fittings">Scaffolding & Form Work Fittings</a></li>
                <li><a href="/services/acrow-span">Acrow Span</a></li>
                <li><a href="/services/column-box">Column Box</a></li>
                <li><a href="/services/shuttering-plates">Shuttering Plates</a></li>
                <li><a href="/services/telescopic-probes">Telescopic Probes</a></li>
              </ul>
            </li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
