import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { ArrowUpRight } from './Icons'
import { ProjectVisual } from './ProjectVisual'
import { Status } from './Status'

export function ProjectCard({ project }: { project: Project }) {
  const path = project.kind === 'research' ? `/research/${project.slug}` : `/work/${project.slug}`
  return (
    <article className="project-card">
      <Link to={path} className="card-visual-link" aria-label={`Read ${project.title} case study`}>
        <ProjectVisual project={project} compact />
      </Link>
      <div className="card-meta">
        <span>{project.number}</span>
        <Status value={project.status} />
      </div>
      <Link to={path} className="card-title-link">
        <h3>{project.title}</h3><ArrowUpRight />
      </Link>
      <p className="card-category">{project.category}</p>
      <p className="card-intro">{project.intro}</p>
      <ul className="tag-list" aria-label="Technologies and methods">
        {project.tags.slice(0, 5).map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
    </article>
  )
}
