import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>使った目的が伝わる技術一覧</h2>
      </div>
      <div className="skill-brief-list">
        {skills.map((skill) => (
          <article className="skill-brief" key={skill.name}>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
