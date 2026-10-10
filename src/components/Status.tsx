import type { ProjectStatus } from '../data/projects'

export function Status({ value }: { value: ProjectStatus }) {
  return <span className="status"><span className="status-dot" />{value}</span>
}
