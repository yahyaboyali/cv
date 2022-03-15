import React from 'react'
import Education from '../layouts/Education'
import SkillsAndCompetences from '../layouts/SkillsAndCompetences'
import { Container,Row,Col} from 'react-bootstrap';
import Projects from '../layouts/Projects';
export default function Genel() {
    return (

        <Container fluid="md">
        <Row>
          <Col lg={6} style={{ marginTop:'1rem' }}><Education/></Col>
          <Col lg={6} style={{ marginTop:'1rem' }}><SkillsAndCompetences/></Col>
        </Row>
        <Row>
          <Col style={{ marginTop:'1rem' }}><Projects/></Col>
        </Row>
      </Container>
    )
}
