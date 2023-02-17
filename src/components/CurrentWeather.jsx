import { Col, Row } from "react-bootstrap";
import { BsArrowDownUp } from "react-icons/bs";
import { useSelector } from "react-redux";

export const CurrentWeather = () => {
  const current = useSelector((state) => state.current);

  return (
    <Col xs={10} md={5} className="glass p-4">
      <Row>
        <h3>Current Weather</h3>
      </Row>
      <Row>
        <p className="display-1 fw-bold">
          <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} style={{ width: "100px" }} /> {current.main.temp.toFixed(0)}
          °
        </p>
        <p>{current.weather[0].description}</p>
      </Row>

      <Row>
        <p className="minmax mb-0">
          <BsArrowDownUp />
          &nbsp;
          <span style={{ color: "red" }}>{current.main.temp_min.toFixed(0)}°</span> -{" "}
          <span style={{ color: "green" }}> {current.main.temp_max.toFixed(0)}° </span> &nbsp;| P: {current.main.pressure} | H:{" "}
          {current.main.humidity}%
        </p>
      </Row>
    </Col>
  );
};
