import React from 'react'
import IfLocale from '../helpers/IfLocale'
import Card from './Card'
import Paragraph from './Paragraph'

const AboutTenera = () => (
  <Card
    title={
      <>
        <IfLocale locale="en">What is Tenera?</IfLocale>
        <IfLocale locale="de">Was ist Tenera?</IfLocale>
      </>
    }
    titleSize={14}
    titleOffsetBottom={16}
    ghost
  >
    <Paragraph style={{ fontSize: '12px', lineHeight: '20px' }}>
      <IfLocale locale="en">
        Tenera connects general contractors with subcontractors, allowing them to work together seamlessly on the
        platform throughout the construction journey phases. Project communication and documentation is saved centrally,
        so that everything can be found in one place.
      </IfLocale>
      <IfLocale locale="de">
        Tenera verbindet ausschreibende Auftraggeber mit Auftragnehmern. Alle notwendigen Informationen zu
        Ausschreibungen und Aufträgen sind an einem Ort verfügbar. Subunternehmer können auf Tenera mit
        Generalunternehmern an Projekten in einem zentralisierten System zusammenarbeiten und kommunizieren.
      </IfLocale>
    </Paragraph>
  </Card>
)

export default AboutTenera
