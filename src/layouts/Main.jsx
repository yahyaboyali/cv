import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
export default function Main() {
  return (
    <Card style={{marginTop:'1rem',padding:'1rem',backgroundColor:'SlateGrey'
    ,bottom:'0',left:'0',width:'100%'}}>
    <Card.Header style={{textAlign:'left'}}><h3> Yahya Boyalı</h3></Card.Header>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  )
}
