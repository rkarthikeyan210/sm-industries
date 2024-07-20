// components/Header.tsx
import React from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <h1>S.M Industries</h1>
        </div>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li>
              <Link href="#">Services</Link>
              <ul className={styles.submenu}>
                <li><Link href="/services/industrial-shed">Industrial Shed Fabrication</Link></li>
                <li><Link href="/services/cup-lock">Cup Lock Scaffolding</Link></li>
                <li><Link href="/services/scaffolding-fittings">Scaffolding & Form Work Fittings</Link></li>
                <li><Link href="/services/acrow-span">Acrow Span</Link></li>
                <li><Link href="/services/column-box">Column Box</Link></li>
                <li><Link href="/services/shuttering-plates">Shuttering Plates</Link></li>
                <li><Link href="/services/telescopic-probes">Telescopic Probes</Link></li>
              </ul>
            </li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
