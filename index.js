import { promises as fs } from 'fs'
import ReactDOM from 'react-dom/cjs/react-dom-server.node.production.min.js'
import { fileURLToPath, pathToFileURL } from 'url'

import { templatesUrl, rootDir, templatesDir, outputDir } from './config/index.js'

import { layout, header, footer, aboutTenera, bottomText } from './shared/index.js'

const importTemplateComponents = async templateName => {
  const currentTemplateDir = `${rootDir}/${templatesDir}/${templateName}`
  const files = await fs.readdir(pathToFileURL(currentTemplateDir))
  const map = {}
  for (const file of files) {
    map[file.replace(/\.js$/, '')] = await import(pathToFileURL(`${currentTemplateDir}/${file}`))
  }

  return {
    title: map.title?.title,
    body: map.body?.body,
  }
}

const loopFilesInTemplate = async templateName => {
  const currentOutputDir = `${rootDir}/${outputDir}/${templateName}`

  const { title, body } = await importTemplateComponents(templateName)

  if (!title) {
    return
  }

  const output = ReactDOM.renderToString(layout({ header, title, body, aboutTenera, bottomText, footer }))

  await fs.writeFile(pathToFileURL(`${currentOutputDir}.html`), output)
}

const loopTemplates = async () => {
  const templateFolders = await fs.readdir(fileURLToPath(templatesUrl))

  for (const templateFolder of templateFolders) {
    await loopFilesInTemplate(templateFolder)
  }
}

try {
  loopTemplates()
} catch (e) {
  console.error('Error generating templates:  ', e)
}
