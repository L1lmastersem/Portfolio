import { useInView } from '../../hooks/useInView';
import './Projects.css';

const projects = [
  {
    number: '01',
    title: 'E-commerce Webshop',
    description: 'My First Webshop built with HTML, CSS, JavaScript and PHP. It features a product catalog, shopping cart, and user authentication.',
    tags: ['HTML', 'JavaScript', 'CSS', 'PHP'],
    live: 'https://38252.hosts2.ma-cloud.nl/webshop/html/index.html',
    github: 'https://github.com/L1lmastersem/webshop',
  },
  {
    number: '02',
    title: 'Coming Soon',
    description: '',
    tags: [],
    live: null,
    github: null,
  },
  {
    number: '03',
    title: 'Coming Soon',
    description: '',
    tags: [],
    live: null,
    github: null,
  },
];

function ProjectRow({ p, delay }) {
  const [ref, visible] = useInView();
  return (
    <article
      ref={ref}
      className={`project-item${visible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="project-number">{p.number}</span>
      <div className="project-body">
        <h3 className="project-title">{p.title}</h3>
        <p className="project-desc">{p.description}</p>
        <ul className="project-tags">
          {p.tags.map(tag => (
            <li key={tag} className="project-tag">{tag}</li>
          ))}
        </ul>
      </div>
      <div className="project-links">
        {p.live && (
          <a href={p.live} className="project-link" target="_blank" rel="noopener noreferrer">
            Live
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
        {p.github && (
          <a href={p.github} className="project-link" target="_blank" rel="noopener noreferrer">
            GitHub
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
  return (
    <section className="projects" id="projects">
      <div ref={headerRef} className={`projects-header${headerVisible ? ' is-visible' : ''}`}>
        <span className="projects-eyebrow">selected work</span>
        <h2 className="projects-heading">Projects</h2>
      </div>
      <div className="projects-list">
        {projects.map((p, i) => (
          <ProjectRow key={p.number} p={p} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
