import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Pet.Lib</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Items Gor Here */}
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/AddPet">Add Pet</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Checkout">Checkout Pet</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/About">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
