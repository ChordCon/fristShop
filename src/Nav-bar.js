import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import "./Navbar.css";

const NavbarF = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className="nav-link">
            Chord shoes
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link href="#Detail">
            <Link to="/detail" className="nav-link">
              Detail
            </Link>
          </Nav.Link>
          <Nav.Link href="#Login">
            <Link to="/Login" className="nav-link">
              Login
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarF;
