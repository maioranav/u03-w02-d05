import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const errorpage = useNavigate();
  const dispatch = useDispatch();
  const cityloc = useSelector((state) => state.city);
  const [city, setCity] = useState(cityloc.name);

  const fetchByLoc = async (city, lat, lon) => {
    dispatch({ type: "CHANGE_CITY", payload: { name: city, lat, lon } });
    try {
      let queryWeather = await fetch(
        `${process.env.REACT_APP_OWAPICURRENT}?&appid=${process.env.REACT_APP_OWAPIKEY}&lat=${lat.toFixed(2)}&lon=${lon.toFixed(2)}`
      );
      let currentWeather = await queryWeather.json();
      dispatch({ type: "SAVE_CURRENT", payload: currentWeather });
    } catch (e) {
      errorpage("/catcherror");
    }
  };

  const fetchByCity = async (city) => {
    try {
      let geo = await fetch(`${process.env.REACT_APP_OWAPIGEOLOC}?&appid=${process.env.REACT_APP_OWAPIKEY}&q=${city}`);
      let coord = await geo.json();
      // coord.length > 0 ? dispatch({ type: "CHANGE_CITY", payload: { name: city, lat: coord[0].lat, lon: coord[0].lon } }) : errorpage("/notfound");
      coord.length > 0 ? await fetchByLoc(city, coord[0].lat, coord[0].lon) : errorpage("/notfound");
    } catch (e) {
      errorpage("/catcherror");
    }
  };

  useEffect(() => {
    fetchByCity(city);
  }, [city]);

  return (
    <>
      <Container>
        <Row>
          <h2>{city} - Weather and Forecast DashBoard</h2>
        </Row>
        <Row></Row>
      </Container>
    </>
  );
};
