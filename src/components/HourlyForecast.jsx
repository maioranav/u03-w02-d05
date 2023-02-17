import { Col, Row } from "react-bootstrap";
import { BsArrowDownUp, BsCalendarEvent } from "react-icons/bs";
import { useSelector } from "react-redux";

export const HourlyForecast = () => {
  const hourly = useSelector((state) => state.hourly);

  return (
    <Col xs={10} md={5} className="glass p-4 d-flex flex-column justify-content-between">
      <Row>
        <h3 className="testombra">3Hrs Forecast</h3>
      </Row>
      {hourly.map((event) => (
        <Row key={`hourly${event.dt}`} className="d-flex align-items-center">
          <Col>
            <img src={`http://openweathermap.org/img/wn/${event.weather[0].icon}.png`} />{" "}
            <span className="fw-bold testombra">{event.main.temp.toFixed(0)}°</span>
          </Col>
          <Col className="mintext d-none d-lg-block">
            <BsArrowDownUp /> <span style={{ color: "red" }}>{event.main.temp_min.toFixed(0)}°</span> -{" "}
            <span style={{ color: "green" }}> {event.main.temp_max.toFixed(0)}° </span>
          </Col>
          <Col>
            <p className="minmax mb-0">
              <BsCalendarEvent />
              &nbsp;
              {new Date(event.dt_txt).getHours()}.00
            </p>
          </Col>
        </Row>
      ))}
    </Col>
  );
};
