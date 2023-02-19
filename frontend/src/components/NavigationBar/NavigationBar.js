import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function NavigationBar() {
  const navigate = useNavigate()
  const sessionUser = useSelector(state => state.session.user)

  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="tin" href="/">Tindog</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item as="li">
              <Nav.Link href="/chat">Chat GPT</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/dogs">Dog Gallery</Nav.Link>
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

            <NavDropdown style={{marginRight: 10}} title={<><i class="fa-solid fa-dog"></i></>} id="basic-nav-dropdown">
            {sessionUser 
            ? 
            (
              <>

              <NavDropdown.Item>
                <Button variant="primary" onClick={() => navigate("/profile")}>Profile</Button>
              </NavDropdown.Item>

              <NavDropdown.Item>
              <Button variant="primary" onClick={() => navigate("/signin")}>Log Out</Button>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Button variant="primary" onClick={() => navigate("/current/matches")}>Matches</Button>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Button variant="primary" onClick={() => navigate("/current/messages")}>Messages</Button>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Button variant="primary" onClick={() => navigate("/current/favorites")}>Favorites</Button>
              </NavDropdown.Item>
              
              </>
            ) 
            : 
            (
              <>
              <NavDropdown.Item>
               <Button variant="primary" onClick={() => navigate("/signin")}>Sign In</Button>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Button variant="primary" onClick={() => navigate("/signup")}>Sign Up</Button>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Button variant="primary" onClick={() => navigate("/demouser")}>Demo User</Button>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Button variant="primary" onClick={() => navigate("/dogs")}>Dog Gallery</Button>
              </NavDropdown.Item>
              </>
              )}
              

              

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
