import { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
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
