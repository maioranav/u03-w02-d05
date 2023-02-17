import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RiDislikeLine } from "react-icons/ri";

export const Favs = () => {
  const favs = useSelector((state) => state.favs);
  const dispatch = useDispatch();

  return (
    <Container>
      {favs.map((el, i) => (
        <Row key={`fav-${i}`} className="glass mb-3">
          <Col className="d-flex justify-content-between">
            <Link to={`/weather/${el}`} className="text-light">
              {el}
            </Link>
          </Col>
          <Col xs={1}>
            <RiDislikeLine
              onClick={() => {
                dispatch({ type: "DEL_FAV", payload: el });
              }}
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
};
