import { useEffect } from 'react';
import type { Project } from '../types/project';

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.classList.add('is-modal-open');

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('is-modal-open');
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" aria-label="モーダルを閉じる" onClick={onClose}>
          ×
        </button>
        <div className="modal-visual">
          <img src={project.thumbnail} alt={`${project.title} のサムネイル`} />
        </div>
        <div className="modal-content">
          <p className="project-genre">{project.genre}</p>
          <h2 id="project-modal-title">{project.title}</h2>
          <p>{project.description}</p>
          <dl className="modal-meta">
            <div>
              <dt>制作形態</dt>
              <dd>{project.type}</dd>
            </div>
            <div>
              <dt>制作期間</dt>
              <dd>{project.period}</dd>
            </div>
            <div>
              <dt>担当範囲</dt>
              <dd>{project.role}</dd>
            </div>
          </dl>
          <section className="modal-section">
            <h3>技術スタック</h3>
            <div className="tag-list">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </section>
          <div className="project-links modal-links">
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
      </div>
    </div>
  );
}
