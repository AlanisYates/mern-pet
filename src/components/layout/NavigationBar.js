import React, { Component } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";


export class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Pet.Lib</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Pet" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#Dogs">Dogs</NavDropdown.Item>
                  <NavDropdown.Item href="#Cats">Cats</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link href="/Contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

    );
  }
}

export default NavigationBar;
