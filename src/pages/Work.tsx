import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function Work() {
  return (
    <div className="listing-page page-pad">
      <header className="page-intro">
        <p className="eyebrow">Work · 01—04</p>
        <h1>Projects where design<br/>meets <em>systems thinking.</em></h1>
        <p>Selected work across accessibility, AI systems, interactive narrative, and adaptive interfaces. Case studies are living documents and clearly identify work in progress.</p>
      </header>
      <div className="project-grid project-grid-full">
        {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
      </div>
    </div>
  )
}
