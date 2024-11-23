import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { setCookie } from "../utils/common";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";


const Users = [
  {
    _id: "66ad0dcf9096ea44d465bdd1",
    firstname: "Darshan ",
    lastname: "Vasani",
    email: "darshan@gmail.com",
    role: "admin",
    mobile: "8141625502",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWQwZGNmOTA5NmVhNDRkNDY1YmRkMSIsImlhdCI6MTcyMjc2NzA5MiwiZXhwIjoxNzIyODUzNDkyfQ.mMQy9N4Npg0TnkDhZPCNNSAUJnFFIg6z0pfrj4zVaxM",
  },
  {
    _id: "66ad0e199096ea44d465bdd7",
    firstname: "Dg",
    lastname: "Patel",
    email: "dgpatel@gmail.com",
    role: "user",
    mobile: "2783190209",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWQwZTE5OTA5NmVhNDRkNDY1YmRkNyIsImlhdCI6MTcyMjc2NzExNywiZXhwIjoxNzIyODUzNTE3fQ.N63zOmC58ZUTqHQP1v_vt-n56vdU2VE8lrBkMiJL0tQ",
  },
];

const Login = () => {
    const navigate = useNavigate();
    const { userInfo, setUserInfo } = useUser();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });

    useEffect(() => {
        if (userInfo) navigate("/dashboard");
    }, [userInfo, navigate]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(false);
        setLoading(true);
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setLoading(false);
        } else {
            setTimeout(() => {
                const checkUser = Users.find(user => user.email === formData.email.trim());
                if (checkUser) {
                    setCookie("_USER_AUTH_", JSON.stringify(checkUser));
                    setUserInfo(checkUser);
                    navigate("/dashboard");
                } else {
                    setError(true);
                    setLoading(false);
                }
            }, 2000);
        }

        setValidated(true);
    };

    return (
        <div className="login-section d-flex align-items-center justify-content-center mt-4"style={{ minHeight: '79vh', backgroundImage: 'url("https://cdn.vectorstock.com/i/500p/84/65/abstract-white-monochrome-background-vector-32028465.jpg")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center'  }}>
            <Container>
                <Row className="justify-content-center">
                    <Col xl={4} lg={5} md={7} xs={12}>
                        <div className="login-box rounded p-4 shadow bg-light">
                            <h3 className="mb-4 text-center">Sign In</h3>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        name="email"
                                        placeholder="Enter email"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid email.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type={showPassword ? "text" : "password"}
                                        value={formData.password}
                                        onChange={handleChange}
                                        name="password"
                                        placeholder="Password"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid password.
                                    </Form.Control.Feedback>
                                    <span
                                        className="position-absolute top-50 end-0 me-2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? "hide" : "show"}
                                    </span>
                                </Form.Group>
                                {error && <p className="text-danger">User email or password is incorrect</p>}
                                <Button variant="primary" type="submit" disabled={isLoading}>
                                    {isLoading ? "Loading..." : "Submit"}
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
