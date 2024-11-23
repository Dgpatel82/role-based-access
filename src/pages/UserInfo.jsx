import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useUser } from '../contexts/UserContext';

const UserInfo = () => {
    const { userInfo } = useUser();

    const cardStyle = {
        borderRadius: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        marginBottom: '20px',
    };

    const headingStyle = {
        fontSize: '2rem',
        fontWeight: '600',
        textAlign: 'center',
        color: '#333',
        marginBottom: '20px',
    };

    const textStyle = {
        fontSize: '1.1rem',
        color: '#555',
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '82vh' }}>
            <Container>
                <Row className="mb-4">
                    <Col>
                        <h2 style={headingStyle}>User Information</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <Card style={cardStyle}>
                            <Card.Body>
                                <Card.Title className="text-center">Personal Info</Card.Title>
                                <div>
                                    <Card.Text style={textStyle}>
                                        <strong>Name:</strong> {userInfo.firstname} {userInfo.lastname}
                                    </Card.Text>
                                    <Card.Text style={textStyle}>
                                        <strong>Email:</strong> {userInfo.email}
                                    </Card.Text>
                                    <Card.Text style={textStyle}>
                                        <strong>Phone:</strong> {userInfo.mobile}
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default UserInfo;
