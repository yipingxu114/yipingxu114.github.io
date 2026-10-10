import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from '../components/Icons'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectVisual } from '../components/ProjectVisual'
import { Status } from '../components/Status'
import { projects, research } from '../data/projects'
import { site } from '../data/site'

export function Home() {
  return (
    <>
      <section className="hero page-pad">
        <div className="hero-kicker"><span className="availability-dot" />Designing between people and systems</div>
        <h1><span>Yiping Xu is a</span> designer <em>&</em> engineer shaping thoughtful digital experiences.</h1>
        <div className="hero-foot">
          <p>{site.intro}</p>
          <a href="#selected-work" className="text-link">Selected work <span>↓</span></a>
        </div>
        <div className="hero-mark" aria-hidden="true"><span>Y</span><span>X</span></div>
      </section>

      <section className="selected-work page-pad" id="selected-work">
        <div className="section-heading">
          <p className="eyebrow">Selected work · 2024—26</p>
          <h2>Selected explorations in<br/><em>human-centered technology.</em></h2>
          <Link className="text-link" to="/work">View all work <ArrowRight size={16} /></Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
        </div>
      </section>

      <section className="research-feature page-pad">
        <div className="research-copy">
          <p className="eyebrow">Featured research · University of Pittsburgh</p>
          <Status value={research.status} />
          <h2>{research.title}</h2>
          <p className="research-lede">{research.intro}</p>
          <dl className="research-meta">
            <div><dt>Role</dt><dd>{research.role}</dd></div>
            {research.meta?.slice(1).map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}
          </dl>
          <Link className="button-link" to={`/research/${research.slug}`}>Explore the research <ArrowUpRight /></Link>
        </div>
        <Link className="research-visual-link" to={`/research/${research.slug}`} aria-label="View TMJ research case study"><ProjectVisual project={research} /></Link>
      </section>

      <section className="home-about page-pad">
        <p className="eyebrow">A little about me</p>
        <div className="about-statement">
          <h2>I move between <em>research, design, and code</em> to make complex ideas tangible.</h2>
          <div>
            <p>I’m a multidisciplinary student at the University of Pittsburgh studying Computer Science, Digital Narrative & Interactive Design, Philosophy, and History & Philosophy of Science.</p>
            <p>My work asks how technology can better respond to human differences—from sensory-aware navigation to explainable adaptive systems.</p>
            <Link className="text-link" to="/about">More about me <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
