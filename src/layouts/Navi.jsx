import React from 'react'
import { Container,Nav,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Navi() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
            <Container fluid="md">
                <Navbar.Brand as={Link} to="/">
                Yahya Boyalı Cv
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="Education" >Education</Nav.Link>
                        <Nav.Link as={Link} to="SkillsAndCompetences">Skils And Competences</Nav.Link>
                        <Nav.Link as={Link} to="Projects" >Projects</Nav.Link>
                        <Nav.Link as={Link} to="Missions">Take Mission</Nav.Link>
                        <Nav.Link as={Link} to="Certificates">CERTIFICATES And ACHIEVEMENTS</Nav.Link>
                        <Nav.Link  as={Link} to="Languages">Languages</Nav.Link>
                        <Nav.Link as={Link} to="Interests">Interests</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}
