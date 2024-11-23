import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';  

const Footer = () => {
    return (
        <footer className="bg-dark text-white p-2 mt-4">
            <Container>
                <Row className="justify-content-center ">
                    <Col className="text-center align-content-center">
                        <p>
                            Made with <FaHeart style={{ color: 'red' }} /> by <strong>Darshan Vasani</strong>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
