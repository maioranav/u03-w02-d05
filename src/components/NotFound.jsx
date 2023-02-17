import { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const NotFound = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "LOADTOGGLE", payload: false });
    dispatch({ type: "CHANGE_CITY", payload: { name: "Milazzo" } });
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  return (
    <Alert key="404" variant="danger">
      <Alert.Heading>404, what the hell?!</Alert.Heading>
      You broke the lines! There's nothing to se here, go back NOW!
      <hr />
      <p className="mb-0">We're working to route you to our dashboard._</p>
    </Alert>
  );
};
