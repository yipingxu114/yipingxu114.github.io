import { Link, useParams } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from '../components/Icons'
import { ProjectVisual } from '../components/ProjectVisual'
import { Status } from '../components/Status'
import { allProjects, getProject } from '../data/projects'
import { NotFound } from './NotFound'

export function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <NotFound />

  const currentIndex = allProjects.findIndex((item) => item.slug === project.slug)
  const next = allProjects[(currentIndex + 1) % allProjects.length]
  const nextPath = next.kind === 'research' ? `/research/${next.slug}` : `/work/${next.slug}`

  return (
    <article className="case-study">
      <header className="case-hero page-pad">
        <div className="case-breadcrumb"><Link to={project.kind === 'research' ? '/research' : '/work'}>{project.kind === 'research' ? 'Research' : 'Work'}</Link><span>/</span><span>{project.number}</span></div>
        <div className="case-title-row">
          <div>
            <Status value={project.status} />
            <h1>{project.title}</h1>
            <p>{project.intro}</p>
          </div>
          <span className="case-number">{project.number}</span>
        </div>
        <dl className="case-facts">
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Timeline</dt><dd>{project.year}</dd></div>
          <div><dt>Focus</dt><dd>{project.category}</dd></div>
          {project.meta?.slice(0, 1).map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}
        </dl>
      </header>
      <div className="case-cover page-pad"><ProjectVisual project={project} /></div>
      <div className="case-content page-pad">
        <aside className="case-index">
          <p className="eyebrow">In this case study</p>
          <ol>{project.sections.map((section, index) => <li key={section.title}><a href={`#section-${index + 1}`}>{section.eyebrow ?? section.title}</a></li>)}</ol>
        </aside>
        <div className="case-sections">
          {project.sections.map((section, index) => (
            <section id={`section-${index + 1}`} key={section.title}>
              <p className="eyebrow">{String(index + 1).padStart(2, '0')} · {section.eyebrow}</p>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul className="case-bullets">{section.bullets.map((bullet) => <li key={bullet}><span>{String(section.bullets!.indexOf(bullet) + 1).padStart(2, '0')}</span>{bullet}</li>)}</ul>}
              {section.note && <div className="editorial-note"><span>Documentation note</span><p>{section.note}</p></div>}
            </section>
          ))}
          {project.links && <div className="project-links"><p className="eyebrow">Project links</p>{project.links.map((link) => link.pending ? <span className="pending-link" key={link.label}>{link.label}</span> : <a href={link.href} key={link.label}>{link.label}<ArrowUpRight /></a>)}</div>}
        </div>
      </div>
      <Link to={nextPath} className="next-project page-pad">
        <span><span className="eyebrow">Next case study · {next.number}</span><strong>{next.shortTitle}</strong></span><ArrowRight size={38} />
      </Link>
    </article>
  )
}
