import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
export default function Main() {
    return (
        <Container style={{ backgroundColor: 'SlateGrey' }}>
            <Row>
                <Col style={{ textAlign: 'left' }}><h4>Yahya Boyalı</h4></Col>
                <Col style={{ textAlign: 'right', color: 'black' }}><a href="mailto:yahyaboyali@gmail.com"> yahyaboyali@gmail.com</a></Col>

            </Row>
            <Row style={{ textAlign: 'left' }}>
                <Col><h6>Computer Engineering Student At Istanbul University- Cerrahpasa</h6></Col>
                <Col style={{ textAlign: 'right' }}>+90 538 553 6431</Col>
            </Row>
            <Row style={{ textAlign: 'left' }}>
                <Col><h6>Project Manager at Bilgisayar Kulübü</h6></Col>
                
                <Col style={{ textAlign: 'right' }}>Istanbul, TURKEY</Col>
            </Row>
            <Row style={{ textAlign: 'left' }}>
                <Col md={'6'}><p>am a student of computer engineering, which was my childhood
                    dream. I am a curious person who likes to work, tries to produce
                    innovative solutions for people and their own business, and does
                    not give up easily.</p></Col>
                <Col style={{ textAlign: 'right' }} >
                    <a href="https://www.linkedin.com/in/yahyaboyali/"
                        target="_blank">https://www.linkedin.com/in/yahyaboyali/</a></Col>
                     <Col style={{ textAlign: 'right' }} ><a href='https://github.com/yahyaboyali' target="_blank" >https://github.com/yahyaboyali</a></Col>   
            </Row>
        </Container>

    )
}
