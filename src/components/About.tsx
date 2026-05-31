import { profile } from '../data/profile';

export default function About() {
  return (
    <section className="section-shell about" id="about">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>{profile.title}</h2>
      </div>
      <div className="about-text">
        {profile.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
