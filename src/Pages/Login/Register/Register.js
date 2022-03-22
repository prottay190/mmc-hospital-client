import React, { useState } from 'react';
import { Alert,  Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Header from '../../Home/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import "./Register.css";


const Register = () => {
  const [logInData, setLoginData] = useState({});
  const navigate = useNavigate();
  const { user, registerUser, isLoading, authError, singInUsingGoogle } = useAuth();

  const handleLoginSubmit = (e) => {
    registerUser(logInData.email, logInData.password, logInData.name, navigate);
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...logInData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  return (
    <>
      <Header></Header>
      <Container className="login-con p-5">
        <Row>
          <Col lg={2}></Col>
          <Col lg={8} sm={12} className="register-container">
            <div className="register-form">
              <h2 className="register-text">Please Register</h2>
              {!isLoading && (
                <>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      onChange={handleOnChange}
                      placeholder="Enter your Name"
                    />
                  </Form.Group>
                  <Form onSubmit={handleLoginSubmit}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                        placeholder="Enter email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        placeholder="Password"
                      />
                    </Form.Group>
                    <NavLink style={{ textDecoration: "none" }} to="/login">
                      <span className="link-text">
                        Already Registered? please LogIn
                      </span>
                    </NavLink>
                    <button className="lonin-btn" type="submit">
                      Register
                    </button>{" "}
                    <br />
                  </Form>
                  <div>or</div>
              <button className="lonin-btn" onClick={singInUsingGoogle}>
                  Google SignIn
                </button>
                </>
              )}
              <div className="wrapper">
                <div className="divider div-transparent div-dot"></div>
              </div>
              {isLoading && <Spinner animation="border" variant="info" />}
              {user?.email && (
                <Alert style={{ marginTop: "10px" }} variant="success">
                  successfuly Registger!!
                </Alert>
              )}
              {authError && <Alert variant="danger">{authError}</Alert>}
            </div>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Register;
