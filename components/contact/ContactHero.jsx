
export default function ContactHero() {
  return (
    <>
      <section className={styles.hero}>
        <h2 className={styles.heroGhost}>Contact Us</h2>
        <h3 className={styles.heroTitle}>Contact Us</h3>
        <p className={styles.heroSubtitle}>More than 24 years of Excellence in Design Education</p>
        <div className={styles.breadcrumb}>
          <span>Home</span>
          <span className={styles.breadSep}>»</span>
          <span className={styles.breadActive}>Contact Us</span>
        </div>
      </section>

      <section className={styles.connectSection}>
        <div className={styles.connectLeft}>
          <span className={styles.connectTag}>— CONTACT OUR EXPERTS</span>
          <h2 className={styles.connectHeading}>
            Connect with Us for<br />Immediate Assistance
          </h2>
        </div>
        <div className={styles.connectRight}>
          <span className={styles.redBar}></span>
          <p>Connect with us now</p>
        </div>
      </section>
    </>
  );
}