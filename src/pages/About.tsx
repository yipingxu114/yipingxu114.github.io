import { ArrowUpRight } from '../components/Icons'
import { site } from '../data/site'

const studies = ['B.S. Computer Science', 'B.S. Digital Narrative and Interactive Design', 'B.A. Philosophy', 'B.A. History and Philosophy of Science']
const interests = ['Human–Computer Interaction', 'Interaction Design', 'UX Engineering', 'Accessibility', 'Human–AI Interaction', 'Creative Computing', 'Human-Centered Technology']

export function About() {
  return (
    <div className="about-page page-pad">
      <header className="about-hero">
        <p className="eyebrow">About · Yiping Xu</p>
        <h1>I’m interested in the space between how a system <em>works</em> and how it <em>feels.</em></h1>
      </header>
      <div className="about-body">
        <aside className="portrait-placeholder" aria-label="Portrait placeholder">
          <span>YX</span><p>Portrait<br/>to be added</p>
        </aside>
        <div className="about-copy">
          <p className="about-lede">I’m a multidisciplinary student at the University of Pittsburgh, working across design, computing, and the humanities.</p>
          <p>My practice combines human-centered inquiry with technical implementation. I’m drawn to problems where the system is complex, the human context matters, and the interface has to make both understandable.</p>
          <p>Across navigation, assistive technology, developer tools, and interactive narrative, I use research, prototyping, and code as connected ways of thinking.</p>
          <div className="about-columns">
            <section>
              <h2>Education</h2>
              <p>University of Pittsburgh</p>
              <ul>{studies.map((study) => <li key={study}>{study}</li>)}</ul>
            </section>
            <section>
              <h2>Areas of interest</h2>
              <ul>{interests.map((interest) => <li key={interest}>{interest}</li>)}</ul>
            </section>
          </div>
          <div className="about-links">
            <a className="button-link" href={site.emailHref}>Get in touch <ArrowUpRight /></a>
            <a className="text-link" href={site.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
            <a className="text-link disabled-link" href={site.resume} aria-label="Resume placeholder">Resume — coming soon</a>
          </div>
        </div>
      </div>
    </div>
  )
}
