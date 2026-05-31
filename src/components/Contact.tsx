const contacts = [
  { label: 'GitHub', url: 'https://github.com/your-name' },
  { label: 'Email', url: 'mailto:your.email@example.com' },
  { label: 'X / Twitter', url: 'https://x.com/your-name' },
  { label: 'Portfolio repository', url: 'https://github.com/your-name/Saikoro0145' },
];

export default function Contact() {
  return (
    <section className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>連絡先</h2>
      </div>
      <div className="contact-links">
        {contacts.map((contact) => (
          <a href={contact.url} key={contact.label} target="_blank" rel="noreferrer">
            {contact.label}
          </a>
        ))}
      </div>
    </section>
  );
}
