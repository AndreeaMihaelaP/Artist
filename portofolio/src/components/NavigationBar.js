import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Logo from "../assets/logo/logo.svg";
import "../styles.css";

const NavigationBar = () => {
  return (
    <>
      <Navbar
        style={{
          // backgroundColor: "black",
          backgroundColor: "#02111B",
          marginTop: "30px",
          opacity: 0.9,
          // opacity: 0.5,
        }}
        collapseOnSelect
        fixed="top"
        expand="sm"
        variant="dark">
        <Container>
          <Navbar.Brand
            href="/"
            style={{ display: "flex", alignItems: "center" }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "80px", height: "80px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/" className=" navbar-style navbar-line px-5">
                HOME
              </Nav.Link>
              <NavDropdown
                title="GALLERY"
                id="basic-nav-dropdown"
                className=" navbar-style navbar-line px-5">
                <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
                <NavDropdown.Item href="/gallery">Flowers</NavDropdown.Item>
                <NavDropdown.Item href="/gallery">Portraits</NavDropdown.Item>
                <NavDropdown.Item href="/gallery">Landscapes</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="EXHIBITIONS"
                id="basic-nav-dropdown"
                className=" navbar-style navbar-line px-5">
                <NavDropdown.Item href="/exhibitions">
                  Personal
                </NavDropdown.Item>
                <NavDropdown.Item href="/exhibitions">
                  University
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="/about"
                className=" navbar-style navbar-line px-5">
                ABOUT
              </Nav.Link>
              <Nav.Link href="/contact" className="navbar-style px-5">
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavigationBar;
