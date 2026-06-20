'use client';

import React from 'react';
import Image from 'next/image'; // Imported Next.js Image component

export default function MapSection() {
  return (
    <section className={styles.mapSection}>
      {/* Container forced to relative to serve as a structural anchor for the absolute Image child */}
      <div className={`${styles.mapWrap} relative w-full h-[500px]`}>
        <Image
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&h=500&fit=crop"
          alt="PIFT Institute Map"
          fill
          sizes="100vw"
          className={styles.mapImage}
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.mapPin}>
          <div className={styles.pinLabel}>PIFT INSTITUTE</div>
          <div className={styles.pinStick}></div>
          <div className={styles.pinDot}></div>
        </div>
      </div>
    </section>
  );
}