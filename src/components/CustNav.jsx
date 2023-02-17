import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CustNav = () => {
  return (
    <Navbar expand="lg" className="navpadding">
      <Container className="glass">
        <Link to="/" className="navbar-brand">
          WeatherApp
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="City..." className="me-2" aria-label="Search" />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
