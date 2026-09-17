import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const required = [
  'docs/index.md',
  'docs/guide/index.md',
  'docs/ideas/index.md',
  'docs/ideas/principles.md',
  'docs/journal/index.md',
  'docs/journal/2026-09-17-site-launch.md',
  'docs/journal/2026-09-17-direction.md',
  'docs/about.md',
  'docs/.vitepress/config.mts',
  'docs/.vitepress/dist/index.html',
  '.github/workflows/deploy.yml'
]

const missing = required.filter((p) => !existsSync(resolve(root, p)))
if (missing.length) {
  console.error('verify failed, missing:\n' + missing.map((m) => `  - ${m}`).join('\n'))
  process.exit(1)
}
console.log('verify ok')
