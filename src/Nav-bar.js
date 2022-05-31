import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const NavbarF = () => {
  let navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          Chord shoes
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Nav.Link>
          {/* <Nav.Link
            onClick={() => {
              navigate("/detail");
            }}
          >
            Detail
          </Nav.Link> */}
          <Nav.Link
            onClick={() => {
              navigate("/event");
            }}
          >
            Event
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarF;
