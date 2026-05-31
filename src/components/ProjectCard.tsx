import type { KeyboardEvent } from 'react';
import type { Project } from '../types/project';

type ProjectCardProps = {
  project: Project;
  onSelect: () => void;
};

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect();
    }
  };

  return (
    <article
      className="project-card"
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      aria-label={`${project.title} の詳細を開く`}
    >
      <div className="project-thumb">
        <img src={project.thumbnail} alt={`${project.title} のサムネイル`} />
      </div>
      <div className="project-body">
        <div className="project-title-row">
          <div>
            <p className="project-genre">{project.genre}</p>
            <h3>{project.title}</h3>
          </div>
          <span className="project-type">{project.type}</span>
        </div>
        <p className="project-description">{project.description}</p>
        <dl className="project-meta">
          <div>
            <dt>担当</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>期間</dt>
            <dd>{project.period}</dd>
          </div>
        </dl>
        <div className="tag-list">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-links" onClick={(event) => event.stopPropagation()}>
          <a href={project.github.url} target="_blank" rel="noreferrer">
            {project.github.label}
          </a>
          <a href={project.movie.url} target="_blank" rel="noreferrer">
            {project.movie.label}
          </a>
          {project.demo && (
            <a href={project.demo.url} target="_blank" rel="noreferrer">
              {project.demo.label}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
