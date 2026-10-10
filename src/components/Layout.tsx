import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { site } from '../data/site'
import { ArrowUpRight, CloseIcon, MenuIcon } from './Icons'

export function Layout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <Link className="wordmark" to="/" aria-label="Yiping Xu, home">YX<span>©26</span></Link>
        <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <CloseIcon /> : <MenuIcon />}</button>
        <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation" onClick={() => setOpen(false)}>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/about">About</NavLink>
          <a href={site.emailHref} className="nav-contact">Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>
      <main id="main"><Outlet /></main>
      <footer className="site-footer">
        <div>
          <p className="footer-callout">Have a question, opportunity,<br/>or interesting problem?</p>
          <a className="footer-email" id="contact" href={site.emailHref}>{site.email}<ArrowUpRight size={26} /></a>
        </div>
        <div className="footer-bottom">
          <span>Yiping Xu © 2026</span>
          <span>Designed & built with intention</span>
          <a href={site.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
          <a href="#main">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}
