import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../../../UserContext";
import Swal from "sweetalert2";

const LoginForm = () => {
  const navigate = useNavigate();

  const { setUser, user } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    fetch("https://labloco-medical-supplies.herokuapp.com/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          setUser({
            accessToken: data.accessToken,
          });
          Swal.fire({
            title: "SUCCESS",
            icon: "success",
            text: "You are now logged in",
            iconColor: "#17355E",
            confirmButtonColor: "#17355E",
            color: "#17355E",
          });
          fetch(
            "https://labloco-medical-supplies.herokuapp.com/users/profile/",
            {
              headers: {
                Authorization: `Bearer ${data.accessToken}`,
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.isAdmin) {
                localStorage.setItem("isAdmin", data.isAdmin);
                setUser({
                  isAdmin: data.isAdmin,
                });
                navigate("/admin");
              } else {
                navigate("/");
              }
            });
        } else {
          Swal.fire({
            title: "Login failed",
            icon: "error",
            text: "Email or password is incorrect",
            color: "#17355E",
          });
        }
        setEmail("");
        setPassword("");
      });
  };

  const loginInputs = () => {
    if (email && password) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(loginInputs, [email, password]);

  const emailChangeHandler = (e) => setEmail(e.target.value);
  const passwordChangeHandler = (e) => setPassword(e.target.value);
  return user.accessToken && user.isAdmin ? (
    <Navigate to="/admin" />
  ) : user.accessToken ? (
    <Navigate to="/" />
  ) : (
    <Container className="pt-3 pb-5 mb-5">
      <Row>
        <Col>
          <Form
            onSubmit={loginHandler}
            style={{ maxWidth: "18rem" }}
            className="mx-auto"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="border-prime text-content"
                type="email"
                placeholder="Email"
                value={email}
                onChange={emailChangeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                className="border-prime text-content"
                type="password"
                placeholder="Password"
                value={password}
                onChange={passwordChangeHandler}
              />
            </Form.Group>
            {isActive ? (
              <Button className="custom-btn-2" type="submit">
                Login
              </Button>
            ) : (
              <Button disabled className="custom-btn-2" type="submit">
                Login
              </Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
