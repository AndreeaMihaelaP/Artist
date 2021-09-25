import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <Navbar
        style={{
          backgroundColor: "#00153E",
          marginTop: "30px",
          opacity: 0.5,
        }}
        collapseOnSelect
        fixed="top"
        expand="sm"
        variant="dark">
        <Container>
          <Navbar.Brand href="/">Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Gallery" id="basic-nav-dropdown">
                <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
                <NavDropdown.Item href="/gallery">Flowers</NavDropdown.Item>
                <NavDropdown.Item href="/gallery">Portraits</NavDropdown.Item>
                <NavDropdown.Item href="/gallery">Landscapes</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Exhibitions" id="basic-nav-dropdown">
                <NavDropdown.Item href="/exhibitions">
                  Personal
                </NavDropdown.Item>
                <NavDropdown.Item href="/exhibitions">
                  University
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavigationBar;
