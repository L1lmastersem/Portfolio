import { useInView } from '../../hooks/useInView';
import './About.css';

export function About() {
  const [headerRef, headerVisible] = useInView();
  const [bodyRef,   bodyVisible]   = useInView();
  const [stackRef,  stackVisible]  = useInView();

  return (
    <section className="about" id="about">
      <div ref={headerRef} className={`about-header${headerVisible ? ' is-visible' : ''}`}>
        <span className="about-eyebrow">about me</span>
        <h2 className="about-heading">Sem Pater</h2>
      </div>

      <div ref={bodyRef} className={`about-body${bodyVisible ? ' is-visible' : ''}`}>
        <div className="about-col">
          <p>
            Second-year student at Mediacollege Amsterdam studying software
            development. I build web applications with React, JavaScript and
            PHP — and I take a lot of pride in the details most people never
            notice.
          </p>
          <p>
            I got into development because I wanted to turn ideas into something
            real and usable. I like owning a project end-to-end, from a rough
            sketch to a deployed product that actually feels good to use.
          </p>
        </div>
        <div className="about-col">
          <p>
            Outside of school I'm always working on side projects or learning
            something new. Right now I'm focused on sharpening my React skills
            and getting more comfortable with backend architecture.
          </p>
          <p>
            I'm actively looking for an internship where I can contribute from
            day one, grow fast, and build things I'm proud of.
          </p>
          <a href="/cv.pdf" className="about-btn" download>Download CV</a>
        </div>
      </div>

      <div ref={stackRef} className={`about-stack${stackVisible ? ' is-visible' : ''}`}>
        <div className="about-stack-group">
          <span className="about-stack-label">Frontend</span>
          <span className="about-stack-items">React · JavaScript · HTML · CSS</span>
        </div>
        <div className="about-stack-divider" />
        <div className="about-stack-group">
          <span className="about-stack-label">Backend</span>
          <span className="about-stack-items">PHP · SQL · Node.js</span>
        </div>
      </div>
    </section>
  );
}
