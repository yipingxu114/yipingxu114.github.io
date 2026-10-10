import type { Project } from '../data/projects'

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`project-visual visual-${project.cover} ${compact ? 'visual-compact' : ''}`} style={{ '--accent': project.accent } as React.CSSProperties} aria-hidden="true">
      <span className="visual-index">{project.number}</span>
      {project.cover === 'map' && <><span className="road road-a" /><span className="road road-b" /><span className="road road-c" /><span className="map-node node-a" /><span className="map-node node-b" /><span className="route-line" /></>}
      {project.cover === 'code' && <div className="code-window"><span /><span /><span /><i /><i /><i /><b /><b /></div>}
      {project.cover === 'game' && <><span className="moon" /><span className="hill hill-a" /><span className="hill hill-b" /><span className="game-figure" /></>}
      {project.cover === 'schedule' && <div className="calendar-grid">{Array.from({ length: 12 }, (_, i) => <span key={i} className={i === 5 || i === 6 || i === 9 ? 'active' : ''} />)}</div>}
      {project.cover === 'research' && <><span className="orbit orbit-a" /><span className="orbit orbit-b" /><span className="capability-dot dot-a" /><span className="capability-dot dot-b" /><span className="capability-dot dot-c" /><span className="capability-center">daily<br/>capability</span></>}
      <span className="visual-label">{project.shortTitle}</span>
    </div>
  )
}
