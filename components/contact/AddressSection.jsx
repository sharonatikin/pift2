
export default function AddressSection() {
  const cards = [
    { icon: '📍', title: 'PIFT INSITUTE', lines: ['119, Mall Road,', 'Jawala Temple Street,', 'Fountain Chowk,', 'Ludhiana, Punjab – India'] },
    { icon: '📞', title: 'Mobile Number', lines: ['+91-9779115198', '+91-8847089593'], link: true },
    { icon: '📍', title: 'Have Quires ?', lines: ['Riverbend Parkway (Route)'] },
    { icon: '✉', title: 'Need Support ?', lines: ['contact@piftdesign.in'], link: true },
  ];

  return (
    <section className={styles.addressSection}>
      <span className={styles.addressTag}>— ADDRESS</span>
      <h2 className={styles.addressHeading}>PIFT Institute Location</h2>

      <div className={styles.addressGrid}>
        {cards.map((card, i) => (
          <div key={i} className={styles.addressCard}>
            <div className={styles.iconCircle}>{card.icon}</div>
            <h4>{card.title}</h4>
            {card.lines.map((line, j) => (
              <p key={j} className={card.link ? styles.linkText : ''}>{line}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}