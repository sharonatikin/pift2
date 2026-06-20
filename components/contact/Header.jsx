'use client';

import { useState } from 'react';
import Image from 'next/image'; // Imported Next.js Image component

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <h1 className={styles.brandTitle}>Pinnacle Institute Of Fashion Technology</h1>
        <p className={styles.brandSubtitle}>
          Regd Under MSME & NSDC, Govt Of India / 25+ yrs of Design Experience, ISO Certified Campus
        </p>
      </div>

      <div className={styles.headerNav}>
        {/* Adjusted parent container to preserve layout metrics */}
        <div className={`${styles.logoWrap} relative w-[120px] h-[60px]`}>
          <Image
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=120&h=60&fit=crop"
            alt="PIFT Logo"
            fill
            sizes="120px"
            priority
            className={styles.logo}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#" className={styles.navActive}>Courses</a>
          <a href="#">Portfolio</a>
          <a href="#">Team</a>
          <a href="#">Pages</a>
          <a href="#">Contact</a>
        </nav>
      </div>

      <div className={styles.searchWrap}>
        <input type="text" placeholder="Search" className={styles.search} />
        <button className={styles.searchBtn} aria-label="Search">🔍</button>
      </div>
    </header>
  );
}