import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export const CustNav = () => {
  const dispatch = useDispatch();

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
          <Form
            className="d-flex"
            onSubmit={(event) => {
              event.preventDefault();
              dispatch({ type: "CHANGE_CITY", payload: { name: event.target[0].value } });
            }}
          >
            <Form.Control type="search" placeholder="City..." className="me-2" aria-label="Search" />
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
