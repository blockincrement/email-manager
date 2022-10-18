import { pathToFileURL } from 'url'
import yargs from 'yargs'

const args = yargs(process.argv.slice(2)).argv
export const rootDir = process.cwd()
export const templatesDir = args.t ?? 'templates'
export const templatesUrl = pathToFileURL(`${rootDir}/${templatesDir}`)
export const outputDir = args.o ?? 'output'
