import { Col, Row } from "react-bootstrap";
import { BsArrowDownUp, BsCalendarEvent } from "react-icons/bs";
import { useSelector } from "react-redux";

export const DailyForecast = () => {
  const daily = useSelector((state) => state.daily);

  return (
    <Col className="glass p-4 d-flex flex-column justify-content-between">
      <Row>
        <h3>5 Days Forecast</h3>
      </Row>
      <Row className="d-flex justify-content-between">
        {daily.map((event) => (
          <Col xs={6} md={4} lg={2} key={`daily${event.dt}`} className="d-flex flex-column align-items-center">
            <img src={`http://openweathermap.org/img/wn/${event.weather[0].icon}@2x.png`} style={{ width: "75px" }} />
            <p className="fw-bold">{event.main.temp.toFixed(0)}°</p>
            <p className="mintext">
              <BsArrowDownUp /> <span style={{ color: "red" }}>{event.main.temp_min.toFixed(0)}°</span> -{" "}
              <span style={{ color: "green" }}> {event.main.temp_max.toFixed(0)}° </span>
            </p>
            <p className="minmax mb-0 px-3 py-2">
              <BsCalendarEvent />
              &nbsp;
              {new Date(event.dt_txt).getDate()} / {new Date(event.dt_txt).getMonth() + 1}
            </p>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
