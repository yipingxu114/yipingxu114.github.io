import { Link } from 'react-router-dom'
import { ArrowUpRight } from '../components/Icons'
import { ProjectVisual } from '../components/ProjectVisual'
import { Status } from '../components/Status'
import { research } from '../data/projects'

export function Research() {
  return (
    <div className="listing-page page-pad">
      <header className="page-intro research-intro">
        <p className="eyebrow">Research · Human-centered computing</p>
        <h1>Studying technology through<br/><em>human capability.</em></h1>
        <p>My research interests include accessibility, assistive technology, and interfaces that respond to the complexity of everyday life.</p>
      </header>
      <article className="research-list-card">
        <Link to={`/research/${research.slug}`} className="research-list-visual"><ProjectVisual project={research} /></Link>
        <div className="research-list-copy">
          <div className="card-meta"><span>{research.number}</span><Status value={research.status} /></div>
          <p className="card-category">{research.category}</p>
          <h2>{research.title}</h2>
          <p>{research.intro}</p>
          <dl className="research-meta">
            <div><dt>Role</dt><dd>{research.role}</dd></div>
            {research.meta?.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}
          </dl>
          <Link className="button-link" to={`/research/${research.slug}`}>Read research overview <ArrowUpRight /></Link>
        </div>
      </article>
    </div>
  )
}
