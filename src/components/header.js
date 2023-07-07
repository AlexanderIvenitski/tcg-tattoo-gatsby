import * as React from "react"
import { Link } from "gatsby"
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap'
import LanguageSelect from "./languageSelect"

const Header = ({ siteTitle }) => (
  <div>
    <LanguageSelect/>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#Handpoke">Handpoke</Nav.Link>
                  <Nav.Link href="#Tattoos">Tattoos</Nav.Link>
                  <Nav.Link href="#Faq">Faq</Nav.Link>
                  <Nav.Link href="#Booking">Booking</Nav.Link>
                  <Nav.Link href="#Shop">Shop</Nav.Link>
                  <Nav.Link href="#Kontakt">Kontakt</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
  </div>
  
)

export default Header
