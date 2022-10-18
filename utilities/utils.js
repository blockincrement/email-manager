import { promises as fs } from 'fs'

export async function ensure(path) {
  fs.access(path)
    .then(() => true)
    .catch(() => fs.mkdir(path))
}

export async function readJson(path) {
  const content = await fs.readFile(path, 'utf-8')
  return JSON.parse(content)
}
