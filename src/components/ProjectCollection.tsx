import { useMemo, useState } from 'react';
import { projects } from '../data/projects';
import type { Project, ProjectType } from '../types/project';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const typeFilters: Array<'すべて' | ProjectType> = ['すべて', '個人制作', 'チーム制作'];

export default function ProjectCollection() {
  const [activeTech, setActiveTech] = useState('All');
  const [activeType, setActiveType] = useState<(typeof typeFilters)[number]>('すべて');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const techFilters = useMemo(() => ['All', ...new Set(projects.flatMap((project) => project.tech))], []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTech = activeTech === 'All' || project.tech.includes(activeTech);
      const matchesType = activeType === 'すべて' || project.type === activeType;
      return matchesTech && matchesType;
    });
  }, [activeTech, activeType]);

  return (
    <section className="section-shell projects" id="projects">
      <div className="section-heading project-heading">
        <div>
          <p className="eyebrow">Project Collection</p>
          <h1 className="project-first-title">制作実績</h1>
        </div>
      </div>

      <div className="filter-panel" aria-label="プロジェクトの絞り込み">
        <div className="filter-group">
          <span className="filter-label">Tech</span>
          <div className="filter-buttons">
            {techFilters.map((tech) => (
              <button
                className={activeTech === tech ? 'filter-button is-active' : 'filter-button'}
                key={tech}
                type="button"
                onClick={() => setActiveTech(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <span className="filter-label">Type</span>
          <div className="filter-buttons">
            {typeFilters.map((type) => (
              <button
                className={activeType === type ? 'filter-button is-active' : 'filter-button'}
                key={type}
                type="button"
                onClick={() => setActiveType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={() => setSelectedProject(project)} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="empty-message">条件に一致する作品がありません。フィルタを変更してください。</p>
      )}

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
