import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';

const Users = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Darshan Vasani', role: 'Admin', email: 'darshan@gmail.com' },
        { id: 2, name: 'Dg Patel', role: 'User', email: 'dgpatel@gmail.com' },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'
    const [currentUser, setCurrentUser] = useState({ id: '', name: '', role: '', email: '' });

    // Toggle modal visibility
    const handleClose = () => setShowModal(false);
    const handleShow = (mode, user = {}) => {
        setModalMode(mode);
        setCurrentUser(user);
        setShowModal(true);
    };

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentUser((prev) => ({ ...prev, [name]: value }));
    };

    // Add or edit user
    const handleSaveUser = () => {
        if (modalMode === 'edit') {
            // Edit user
            setUsers((prev) =>
                prev.map((user) =>
                    user.id === currentUser.id ? { ...user, ...currentUser } : user
                )
            );
        } else {
            // Add new user
            const newUser = { ...currentUser, id: Date.now() };
            setUsers((prev) => [...prev, newUser]);
        }
        handleClose();
    };

    // Delete user
    const handleDeleteUser = (id) => {
        setUsers((prev) => prev.filter((user) => user.id !== id));
    };

    return (
        <div className="users">
            <Container>
                <h2 className="text-center mb-4">User List</h2>
                <Button variant="primary" onClick={() => handleShow('add')} className="mb-4">
                    Add New User
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Button
                                        variant="info"
                                        className="me-2"
                                        onClick={() => handleShow('edit', user)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => handleDeleteUser(user.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>

            {/* Modal for Add/Edit User */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalMode === 'edit' ? 'Edit User' : 'Add New User'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formUserName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                name="name"
                                value={currentUser.name}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formUserRole">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter role"
                                name="role"
                                value={currentUser.role}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formUserEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={currentUser.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveUser}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Users;
