import { Button, Container, Form, Nav, Navbar, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const CustNav = () => {
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.isLoading);
  const favs = useSelector((state) => state.favs);

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
            <Link to="/favs" className="nav-link">
              Favs ({favs.length})
            </Link>
          </Nav>
          {loader && <Spinner animation="border" className="d-none d-lg-block mx-3" />}
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
