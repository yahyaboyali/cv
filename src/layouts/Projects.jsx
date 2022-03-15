import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
export default function Projects() {
  return (
    <Container>
      <Row>
        <Col style={{ textAlign: 'Center' }}><h4>PROJECTS</h4></Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Bank Manager</Card.Title>
              <Card.Text>
                For Object Oriented Programming Lesson. Our
                teacher asked us to visually design and code a
                banking system in simulation. In this project, I
                practiced the object-oriented programming
                logic that we learned in the lessons. I learned
                how to make a desktop application with the
                Swing library.
                <div style={{ textAlign: 'left', marginTop: '1rem' }}>
                  <h6>Using languages</h6>
                  java
                  <h6>using libraries</h6>
                  swing
                  <h6>using database</h6>
                  DERBY database
                </div>
              </Card.Text>
              <div className="d-grid gap-2" style={{ textAlign: 'left' }}>
                <Button href='https://github.com/yahyaboyali/bankamanager' target="_blank" variant="secondary">github link</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card >
            <Card.Body>
              <Card.Title>Book Tracking</Card.Title>
              <Card.Text>
                I learned Spring Boot theoretically with my own
                effort. I decided to do a project to apply my
                knowledge and improve myself. I wanted to
                make a book tracking application for my own
                needs.
                <div style={{ textAlign: 'left', marginTop: '1rem' }}>
                  <h6>Using languages</h6>
                  java
                  <h6>using libraries</h6>
                  Spring Boot
                  <h6>using database</h6>
                  PostgreSQL
                </div>
                For fronted going to be develop after finished
                backed. I plan to develop with React.
              </Card.Text>
              <div className="d-grid gap-2" style={{ textAlign: 'left' }}>
                <Button href='https://github.com/yahyaboyali/BookTracking' target="_blank" variant="secondary">click to github</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Card>
          <Card.Body>
            <Card.Title>Backgammon</Card.Title>
            <Card.Text>
              The purpose of this project is to understand
              for keeping records in the file of the moves.
              With this assignment, I improved my java
              knowledge and practiced reading and writing
              file structures.
              <div style={{ textAlign: 'left', marginTop: '1rem' }}>
                <h6>Using languages</h6>
                java
                <h6>using libraries</h6>
                swing
              </div>
            </Card.Text>
            <div className="d-grid gap-2" style={{ textAlign: 'left' }}>
              <Button href='https://github.com/yahyaboyali/backgammon' target="_blank" variant="secondary">github link</Button>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}
