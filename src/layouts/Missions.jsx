import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
export default function Missions() {
  return (
    <Container>
      <Row>
        <Col style={{ textAlign: 'left',marginTop:'1rem',textDecoration:'underline' }}><h4>Missions I have Taken </h4></Col>
      </Row>
      <Row>
        <Col style={{ textAlign: 'left', color: 'DarkOrange' }}><h5>09.2021-</h5></Col>
      </Row>
      <Row  className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Bilgisayar Kulübü</Card.Title>
              <Card.Text>
                I am on the management team
                My mission: leader of Project team.
                we are working to make our club
                members ready for projects by
                organizing various trainings.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: '1rem' }}>
        <Col style={{ textAlign: 'left', color: 'DarkOrange' }}><h5>09.2018 - 06.2021</h5></Col>
      </Row>
      <Row  className="g-4">
        <Col>
          <Card >
            <Card.Body>
              <Card.Title>IUCYBER Student Club</Card.Title>
              <Card.Text>
                I took charge as an administrator.
                We organized participation
                organizations in various cyber security
                meetings with our club members. We
                organized trainings for our friends.
                like linux etc.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
