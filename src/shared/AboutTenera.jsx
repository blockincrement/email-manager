import React from 'react'
import Paragraph from './Paragraph'
import IfLocale from '../helpers/IfLocale'

const LOC_ABOUT_TENERA_DE = `Tenera verbindet ausschreibende Auftraggeber mit Auftragnehmern. Alle notwendigen Informationen zu Ausschreibungen und Aufträgen sind an einem Ort verfügbar. Subunternehmer können auf Tenera mit Generalunternehmern an Projekten in einem zentralisierten System zusammenarbeiten und kommunizieren.`

const LOC_ABOUT_TENERA_EN = `Tenera connects general contractors with subcontractors, allowing them to work together seamlessly on the platform throughout the construction journey phases. Project communication and documentation is saved centrally, so that everything can be found in one place.`

const AboutTenera = () => (
  <>
    <IfLocale locale="en">
      <Paragraph title="What is Tenera?">{LOC_ABOUT_TENERA_EN}</Paragraph>
    </IfLocale>
    <IfLocale locale="de">
      <Paragraph title="Was ist Tenera?">{LOC_ABOUT_TENERA_DE}</Paragraph>
    </IfLocale>
  </>
)

export default AboutTenera
