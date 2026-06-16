
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>P</span>
            <div>
              <h4>PIFT</h4>
              <small>PINNACLE INSTITUTE OF FASHION TECHNOLOGY</small>
            </div>
          </div>
          <p>Shaping India's fashion future since 2000. Campuses in Mumbai, Delhi, Bengaluru & Kolkata.</p>
          <div className={styles.footerSocial}>
            <a href="#">📷</a><a href="#">🐦</a><a href="#">▶</a><a href="#">💼</a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h5>PROGRAMMES</h5>
          <a href="#">B.Des Fashion Design</a>
          <a href="#">M.Des Brand Management</a>
          <a href="#">Fashion Styling</a>
          <a href="#">Textile Design</a>
          <a href="#">Fashion Photography</a>
          <a href="#">Short Courses</a>
        </div>

        <div className={styles.footerCol}>
          <h5>CAMPUS</h5>
          <a href="#">Mumbai</a>
          <a href="#">New Delhi</a>
          <a href="#">Bengaluru</a>
          <a href="#">Kolkata</a>
          <a href="#">Virtual Campus</a>
          <a href="#">Research Centre</a>
        </div>

        <div className={styles.footerCol}>
          <h5>STAY CONNECTED</h5>
          <p>Events, editorials, and industry insights — direct to your inbox.</p>
          <input type="email" placeholder="your@email.com" className={styles.footerInput} />
          <button className={styles.subscribeBtn}>✉ Subscribe</button>
          <p className={styles.footerContact}>📞 +91 22 4000 7890</p>
          <p className={styles.footerContact}>✉ admissions@pift.edu.in</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2026 Pinnacle Institute of Fashion Technology. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Accreditations</a>
        </div>
      </div>
    </footer>
  );
}