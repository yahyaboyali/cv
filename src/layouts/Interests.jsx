import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
export default function Interests() {
  return (
    <Container>
      <Row>
      <Col style={{ textAlign: 'center',marginTop:'1rem',textDecoration:'underline' }}><h4>INTERESTS </h4></Col>
      </Row>
      <Row>
        <Col>Reading</Col>
        <Col>Traveling</Col>
        <Col>Walking</Col>
        <Col>video editing</Col>
      </Row>
    </Container>
  )
}
