import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function NavigationBar() {
  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="tin" href="/">Tindog</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item as="li">
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link href="/download">Download</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
