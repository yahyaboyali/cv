import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Languages() {
  return (
    <Container>
      <Row>
      <Col style={{ textAlign: 'center',marginTop:'1rem',textDecoration:'underline' }}><h4>Languages </h4></Col>
      </Row>
      <Row>
        <Col>English</Col>
        <Col>Turkish</Col>
      </Row>
    </Container>
  )
}
