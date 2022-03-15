import React from 'react'
import Education from '../layouts/Education'
import SkillsAndCompetences from '../layouts/SkillsAndCompetences'
import { Container,Row,Col} from 'react-bootstrap';
import Projects from '../layouts/Projects';
import Missions from '../layouts/Missions';
import Certificates from '../layouts/Certificates';
import Languages from '../layouts/Languages';
import Interests from '../layouts/Interests';
import Main from '../layouts/Main';
export default function Genel() {
    return (

        <Container fluid="md">
          <Row>
            <Col><Main/></Col>
          </Row>
        <Row>
          <Col lg={6} style={{ marginTop:'1rem' }}><Education/></Col>
          <Col lg={6} style={{ marginTop:'1rem' }}><SkillsAndCompetences/></Col>
        </Row>
        <Row>
          <Col style={{ marginTop:'1rem' }}><Projects/></Col>
        </Row>
        <Row>
          <Col lg={6} style={{ marginTop:'1rem' }}><Missions/></Col>
          <Col lg={6} style={{marginTop:'1rem'}}><Certificates/></Col>
        </Row>
        <Row>
          <Col lg={6} style={{ marginTop:'1rem' }}><Languages/></Col>
          <Col lg={6} style={{marginTop:'1rem'}}><Interests/></Col>
        </Row>
      </Container>
    )
}
