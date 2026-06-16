
export default function MapSection() {
  return (
    <section className={styles.mapSection}>
      <div className={styles.mapWrap}>
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&h=500&fit=crop"
          alt="PIFT Institute Map"
          className={styles.mapImage}
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