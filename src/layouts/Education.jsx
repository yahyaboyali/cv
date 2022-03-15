import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
export default function Education() {
  return (
    <Container>
      <Row>
        <Col style={{ textAlign: 'left' }}><h1>EDUCATIONS</h1></Col>
      </Row>
      <Row>
        <Col style={{ textAlign: 'left', color: 'DarkOrange' }}><h5>2018-</h5></Col>
      </Row>
      <Row>
        <Col style={{ textAlign: 'justify' }}><h5>Computer Engineering 3/4(3.33/4)</h5></Col>
        <Col style={{ maxWidth: '1rem' }}></Col>
      </Row>
      <Row style={{ textAlign: 'left' }}>
        <Col>Istanbul University- Cerrahpasa -Istanbul</Col>
      </Row>

      <Row style={{marginTop:'2rem'}}>
        <Col style={{ textAlign: 'left', color: 'DarkOrange' }}><h5>09.2013 - 06.2017</h5></Col>
      </Row>
      <Row>
        <Col style={{ textAlign: 'justify' }}><h5>Anadolu Öğretmen-Fen(71,64/100)</h5></Col>
        <Col style={{ maxWidth: '1rem' }}></Col>
      </Row>
      <Row style={{ textAlign: 'left' }}>
        <Col>Erdemli Fen Lisesi– Mersin</Col>
      </Row>
    </Container>
  )
}
