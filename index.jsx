import { promises as fs } from 'fs'
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { fileURLToPath, pathToFileURL } from 'url'
import Handlebars from 'handlebars'
import prettier from 'prettier'

import Layout from './shared/Layout'
import Header from './shared/Header'
import Footer from './shared/Footer'
import AboutTenera from './shared/AboutTenera'
import BottomText from './shared/BottomText'

import { templatesUrl, rootDir, outputDir } from './config'

Handlebars.registerHelper('equals', (arg1, arg2) => arg1 === arg2)

const importTemplateComponents = async templateName => {
  try {
    const Title = await import(`./templates/${templateName}/Title`)
    const Body = await import(`./templates/${templateName}/Body`)

    return {
      Title: Title?.default,
      Body: Body?.default,
    }
  } catch (err) {
    return {}
  }
}

const loopFilesInTemplate = async templateName => {
  const currentOutputDir = `${rootDir}/${outputDir}/${templateName}`

  const { Title, Body } = await importTemplateComponents(templateName)

  if (!Title || !Body) {
    return
  }

  const htmlRaw = renderToString(
    <Layout
      title={<Title />}
      header={<Header />}
      body={<Body />}
      aboutTenera={<AboutTenera />}
      bottomText={<BottomText />}
      footer={<Footer />}
    />,
  )

  try {
    const html = htmlRaw.replace(/&quot;/g, '"')
    const formattedCode = prettier.format(html, { parser: 'html' })

    // validate that generated html is valid Handlebars template and can work in the SendGrid
    Handlebars.precompile(formattedCode)

    await fs.writeFile(pathToFileURL(`${currentOutputDir}.hbs`), formattedCode)
  } catch (e) {
    console.error(`Invalid Handlebar Template ${templateName}:`, e)
  }
}

const loopTemplates = async () => {
  const templateFolders = await fs.readdir(fileURLToPath(templatesUrl))

  for (const templateFolder of templateFolders) {
    await loopFilesInTemplate(templateFolder)
  }

  console.log(`Succesfully generated ${templateFolders.length} templates: 
      \r   - ${templateFolders.join(',\n   - ')}
  `)
}

try {
  loopTemplates()
} catch (e) {
  console.error('Error generating templates:  ', e)
}
