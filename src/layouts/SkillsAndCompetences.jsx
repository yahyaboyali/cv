import React from 'react'
import { Col, Container, Row, ListGroup ,ProgressBar} from 'react-bootstrap'
export default function SkillsAndCompetences() {
  return (
    <Container>
      <Row>
        <Col style={{ textAlign: 'left' }}><h4>SKILLS & COMPETENCES</h4></Col>
      </Row>
      <Row>
        <ListGroup style={{ textAlign: 'left' }}>
          <ListGroup.Item >Java Skills oop and backend <ProgressBar animated  variant="success" now={60} /></ListGroup.Item>
          <ListGroup.Item>Compability <ProgressBar animated  variant="success" now={75} /></ListGroup.Item>
          <ListGroup.Item>problem solving Skills <ProgressBar animated  variant="success" now={65} /> </ListGroup.Item>
          <ListGroup.Item>Innovative Thinking <ProgressBar animated  variant="success" now={70} /></ListGroup.Item>
          <ListGroup.Item>Analytic Thinking <ProgressBar animated  variant="success" now={68} /></ListGroup.Item>
          <ListGroup.Item>Creativity <ProgressBar animated  variant="success" now={78} /></ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  )
}
