<div align="center">

# Tenera Email Manager

</div>

## General

This repo contains script for generating Sendgrid Dynamic Email templates. Templates are defined as React components
with reusable parts. After generating template, copy paste it as new template version in the Sendgrid UI / Dynamic
Templates.

## Templates

List of all email with rules for their triggering can be found here: https://www.notion.so/justbuild/Platform-e-mails-8ee0fa7bfa0345d7b58e919caa713764



## Generating SendGrid template

Start script ba running `npm run generate`.

- Script generates templates for each folder under `src/templates`
- Each template have to expose two files with two react components: `Body` & `Title`
- Script inject `Body` & `Title` into `Layout` and generate Handlebars file in `/output` folder:
  - This file is valid Handlebars template which should be copied into Sendgrid UI / Dynamic
    Templates.



## Applying template to SendGrid

- In the Sendgrid UI create new version for the Dynamic template you applied changes
- Name the new version of the Sendgrid Dynamic template in the format: `YYYY-MM-DD-short-desc-of-change`
- Copy content of the corresponding email template from the `/output` folder to newly created version of the SendGrid
  email
- Send a test email message
- When a new version is ready, set it as active
- If applying the same change through different templates, use the same version name for each template



## Live reloading & Development process

Start script ba running `npm run generate:live`.

- If template folder contains JSON file `testData.json` script will generate HTML file in the `/preview` folder
- Open generated HTML file in the browser
- On each change in the React components script will re-run and generate fresh preview

## React components instead of Handlebars

Handlebars is a great templating language, but it's not very flexible. It's hard to reuse parts of the template, to    
write complex logic and to debug.

To overcome Handlebars limitations, React components can be used instead.

Some examples:

`Each` comp

                <Each iterator="approvedCertificateProposals">
                  <li>
                    ...
                  </li>
                </Each>

instead

                {`{{#each ${iterator}}}`}
                {children}
                {`{{/each}}`}

`IfLocale` comp

              <IfLocale locale="de">{LOC_FOOTER_TEXT_DE}</IfLocale>

instead
              {`{{#if (equals locale "${locale}")}}`}
              {children}
              {`{{/if}}`}

All available components can be found in `src/helpers` folder.

## Localization

Default localization is German.

      <IfLocale locale="de">
        will be visible if locale is "de" or undefined
      </IfLocale>
