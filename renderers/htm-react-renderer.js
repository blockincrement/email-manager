import { promises as fs } from 'fs'
import ReactDOM from 'react-dom/cjs/react-dom-server.node.production.min'
import { fileURLToPath, pathToFileURL } from 'url'
import yargs from 'yargs'

import { ensure } from '../utilities/utils'

const args = yargs(process.argv.slice(2)).argv
const templatesUrl = pathToFileURL(`${process.cwd()}/${args.t ?? './templates/'}`)
const outputUrl = pathToFileURL(`${process.cwd()}/${args.o ?? './output/'}`)

const files = await fs.readdir(fileURLToPath(templatesUrl))
await ensure(fileURLToPath(outputUrl))

for (const file of files) {
  if (/^_/.test(file)) continue
  const outfile = new URL(file.replace(/\.js$/, '.html'), outputUrl)
  const path = new URL(file, templatesUrl)
  const { title: pageTitle, body: pageBody, layout: pageLayout, header, footer } = await import(path)
  const body = typeof pageBody === 'function' ? await pageBody() : pageBody
  const { layout } = await import(new URL(pageLayout ?? '_layout.js', templatesUrl))
  let output
  try {
    console.log(`--> rendering...`, footer)

    output = ReactDOM.renderToString(layout({ title: pageTitle, header, body, footer }))

    // output = ReactDOMc.render(layout({ title: pageTitle, body }))
  } catch (err) {
    console.error(`--> Error rendering:: `, err)
  }
  await fs.writeFile(fileURLToPath(outfile), output)
}
