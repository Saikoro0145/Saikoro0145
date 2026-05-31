import { skills } from '../data/skills';

export default function About() {
  return (
    <section className="section-shell about" id="about">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>ゲームの仕組みを理解し、扱いやすく実装する</h2>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>
            情報系大学生として、C# と Unity を中心にゲーム開発に取り組んでいます。
            ゲームロジックの実装、状態管理、クラス設計に関心があり、プレイヤーが自然に遊べる挙動を作ることを大切にしています。
          </p>
          <p>
            チーム開発では、あとから読み返しやすく、変更しやすいコードを書くことを意識しています。
            仕様変更や調整が入る前提で、処理の役割を分けながら実装する姿勢を磨いています。
          </p>
        </div>
        <div className="skill-brief-list" aria-label="使用技術">
          {skills.map((skill) => (
            <article className="skill-brief" key={skill.name}>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
