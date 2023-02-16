import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SignUpFormModal from '../Modals/SignUpFormModal';
import Button from 'react-bootstrap/Button';
import LoginFormModal from '../Modals/LoginFormModal';

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
              <Nav.Link href="/dogs">List of Dogs</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/pricing">Pricing</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/download">Download</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/signin">Sign In</Nav.Link>
            </Nav.Item>

            <NavDropdown style={{marginRight: 10}} title={<i class="fa-solid fa-dog"></i>} id="basic-nav-dropdown">
              <NavDropdown.Item>
                <LoginFormModal/>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <SignUpFormModal/>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
