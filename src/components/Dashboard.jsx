import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CurrentWeather } from "./CurrentWeather";
import { DailyForecast } from "./DailyForecast";
import { HourlyForecast } from "./HourlyForecast";

export const Dashboard = () => {
  const errorpage = useNavigate();
  const dispatch = useDispatch();
  const cityloc = useSelector((state) => state.city);
  const current = useSelector((state) => state.current);

  const fetchByLoc = async (city, lat, lon) => {
    dispatch({ type: "CHANGE_LOC", payload: { name: city, lat, lon } });
    //SET CURRENT WEATHER
    try {
      let queryWeather = await fetch(
        `${process.env.REACT_APP_OWAPICURRENT}?&appid=${process.env.REACT_APP_OWAPIKEY}&units=metric&lat=${lat.toFixed(2)}&lon=${lon.toFixed(2)}`
      );
      let currentWeather = await queryWeather.json();
      dispatch({ type: "SAVE_CURRENT", payload: currentWeather });
    } catch (e) {
      errorpage("/catcherror");
    }
    //SET HOURLY FORECAST
    try {
      let queryFCHourly = await fetch(
        `${process.env.REACT_APP_OWAPIHOURS}?&appid=${process.env.REACT_APP_OWAPIKEY}&units=metric&lat=${lat.toFixed(2)}&lon=${lon.toFixed(2)}&cnt=3`
      );
      let hourlyFC = await queryFCHourly.json();
      dispatch({ type: "SAVE_3HFORE", payload: hourlyFC.list });
    } catch (e) {
      errorpage("/catcherror");
    }
    //SET DAILY FORECAST
    try {
      let queryDaily = await fetch(
        `${process.env.REACT_APP_OWAPIHOURS}?&appid=${process.env.REACT_APP_OWAPIKEY}&units=metric&lat=${lat.toFixed(2)}&lon=${lon.toFixed(2)}`
      );
      let { list: dailyFC } = await queryDaily.json();
      let dailyArray = dailyFC.filter((event) => {
        let hours = new Date(event.dt_txt).getHours();
        if (hours === 12) {
          return event;
        }
      });
      dispatch({ type: "SAVE_DAILY", payload: dailyArray });
    } catch (e) {
      errorpage("/catcherror");
    }
  };

  const fetchByCity = async (city) => {
    try {
      let geo = await fetch(`${process.env.REACT_APP_OWAPIGEOLOC}?&appid=${process.env.REACT_APP_OWAPIKEY}&q=${city}`);
      let coord = await geo.json();
      coord.length > 0 ? await fetchByLoc(city, coord[0].lat, coord[0].lon) : errorpage("/notfound");
    } catch (e) {
      errorpage("/catcherror");
    }
  };

  useEffect(() => {
    fetchByCity(cityloc.name);
  }, [cityloc.name]);

  return (
    <>
      <Container>
        <Row>
          <h2 className="mb-4">{cityloc.name} - Weather and Forecast DashBoard</h2>
        </Row>
        <Row className="d-flex justify-content-center justify-content-md-between mb-5">
          {current.weather && <CurrentWeather />}
          {current.weather && <HourlyForecast />}
        </Row>
        <Row>{current.weather && <DailyForecast />}</Row>
      </Container>
    </>
  );
};
