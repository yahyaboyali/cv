import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
export default function Certificates() {
  return (
    <Container>
      <Row>
        <Col style={{ textAlign: 'left', marginTop: '1rem', textDecoration: 'underline' }}><h4>CERTIFICATES & ACHIEVEMENTS </h4></Col>
      </Row>
      <Row className="g-4" style={{ marginTop: '0.5rem' }}>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>EnERP education certificate</Card.Title>
              <Card.Text>
                21 November 2018 ERP training participation
                certificate.
                I was entitled to receive this certificate after
                the ERP training held at the hall event
                organized by our school's industry club. I
                learned how organizations are made in
                companies, how resources can be used more
                efficiently.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="g-4" style={{ marginTop: '1rem' }}>
        <Col>
          <Card >
            <Card.Body>
              <Card.Title>Türkiye’de Gönüllülük eğitimi Anadolu Vakfı</Card.Title>
              <Card.Text>
                Anadolu Vakfı organized volunteer training. I learned
                knowledge about volunteer actvitiy. I was entitled to
                receive this certificate at the end of the training
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="g-4" style={{ marginTop: '1rem' }}>
        <Col>
          <Card >
            <Card.Body>
              <Card.Title>Geleceğin Bilimi</Card.Title>
              <Card.Text>
                The certificate we received for the training we have
                in the event you attended with the cyber security
                club.
                My mission was to explain cryptology. I learned first,
                then I told people what I learned in a presentation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
