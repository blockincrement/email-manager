<div align="center">

# Tenera Email Manager

</div>

## General

This repo contains HTML code for Sendgrid Dynamic Email templates.

## Platform emails

List of all email with rules for their triggering can be found here: https://www.notion.so/justbuild/Platform-e-mails-8ee0fa7bfa0345d7b58e919caa713764

## Applying changes to SendGrid template

- Apply changes to .html file templates in this `src/templates`
- Run npm `run generate`
- In the Sendgrid UI create new version for the Dynamic template you applied changes
- Name the new version of the Sendgrid Dynamic template in the format: `YYYY-MM-DD-short-desc-of-change`
- Copy content of the corresponding email template from the `/dist` folder newly created version of the SendGrid email
- Send a test email message
- When a new version is ready, set it as active
- If applying the same change through different templates, use the same version name for each template

