import { useInView } from '../../hooks/useInView';
import { useLanguage } from '../../i18n/useLanguage';
import './Projects.css';

const projectMeta = [
  {
    number: '01',
    key: 'webshop',
    tags: ['HTML', 'JavaScript', 'CSS', 'PHP'],
    live: 'https://38252.hosts2.ma-cloud.nl/webshop/html/index.html',
    github: 'https://github.com/L1lmastersem/webshop',
  },
  {
    number: '02',
    key: null,
    tags: [],
    live: null,
    github: null,
  },
  {
    number: '03',
    key: null,
    tags: [],
    live: null,
    github: null,
  },
];

function ProjectRow({ meta, delay, t }) {
  const [ref, visible] = useInView();
  const content = meta.key ? t.projects.items[meta.key] : null;
  const title = content ? content.title : t.projects.comingSoon;
  const description = content ? content.description : '';

  return (
    <article
      ref={ref}
      className={`project-item${visible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="project-number">{meta.number}</span>
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <ul className="project-tags">
          {meta.tags.map(tag => (
            <li key={tag} className="project-tag">{tag}</li>
          ))}
        </ul>
      </div>
      <div className="project-links">
        {meta.live && (
          <a href={meta.live} className="project-link" target="_blank" rel="noopener noreferrer">
            {t.projects.live}
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
        {meta.github && (
          <a href={meta.github} className="project-link" target="_blank" rel="noopener noreferrer">
            {t.projects.github}
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const [headerRef, headerVisible] = useInView();
  const { t } = useLanguage();

  return (
    <section className="projects" id="projects">
      <div ref={headerRef} className={`projects-header${headerVisible ? ' is-visible' : ''}`}>
        <span className="projects-eyebrow">{t.projects.eyebrow}</span>
        <h2 className="projects-heading">{t.projects.heading}</h2>
      </div>
      <div className="projects-list">
        {projectMeta.map((meta, i) => (
          <ProjectRow key={meta.number} meta={meta} delay={i * 0.1} t={t} />
        ))}
      </div>
    </section>
  );
}
