type IconProps = { size?: number; className?: string }

export function ArrowUpRight({ size = 18, className }: IconProps) {
  return <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M7 17 17 7M8 7h9v9" /></svg>
}

export function ArrowRight({ size = 18, className }: IconProps) {
  return <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
}

export function MenuIcon({ size = 22 }: IconProps) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 8h16M4 16h16" /></svg>
}

export function CloseIcon({ size = 22 }: IconProps) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m6 6 12 12M18 6 6 18" /></svg>
}
