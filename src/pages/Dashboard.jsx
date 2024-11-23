import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useUser } from '../contexts/UserContext';


const Dashboard = () => {
    const { userInfo } = useUser();

    return (
        <div className="dashboard">
            <Container>
                <Row className="mb-4">
                    <Col>
                        <h2 className="text-center">Dashboard</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Card className="shadow-sm mb-4">
                            <Card.Body>
                                <Card.Title>Welcome {userInfo.firstname}!</Card.Title>
                                <Card.Text>
                                    You are logged in as a {userInfo.role}.
                                </Card.Text>
                                <Button variant="primary">Edit Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="shadow-sm mb-4">
                            <Card.Body>
                                <Card.Title>Your Stats</Card.Title>
                                <Card.Text>
                                    View your recent activities, usage, and more.
                                </Card.Text>
                                <Button variant="secondary">View Stats</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="shadow-sm mb-4">
                            <Card.Body>
                                <Card.Title>Notifications</Card.Title>
                                <Card.Text>
                                    Check out your latest notifications.
                                </Card.Text>
                                <Button variant="info">View Notifications</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Dashboard;
