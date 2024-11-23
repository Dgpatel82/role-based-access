import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const AdminPanel = () => {
    return (
        <div className="admin-panel">
            <Container>
                <Row className="mb-4">
                    <Col>
                        <h2 className="text-center">Admin Panel</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Card className="shadow-sm mb-4">
                            <Card.Body>
                                <Card.Title>Manage Users</Card.Title>
                                <Card.Text>
                                    View, add, or remove users from the system.
                                </Card.Text>
                                <Button variant="primary">Manage</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="shadow-sm mb-4">
                            <Card.Body>
                                <Card.Title>System Settings</Card.Title>
                                <Card.Text>
                                    Configure the system settings and preferences.
                                </Card.Text>
                                <Button variant="warning">Configure</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="shadow-sm mb-4">
                            <Card.Body>
                                <Card.Title>Reports</Card.Title>
                                <Card.Text>
                                    View detailed reports of system usage.
                                </Card.Text>
                                <Button variant="success">View Reports</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AdminPanel;
