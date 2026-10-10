import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons'

export function NotFound() {
  return <div className="not-found page-pad"><p className="eyebrow">404 · Page not found</p><h1>This path doesn’t lead anywhere—yet.</h1><Link className="button-link" to="/">Return home <ArrowRight /></Link></div>
}
