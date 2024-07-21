import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../api';
import { Container, Form, Button } from 'react-bootstrap';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/register', { name, email, password });
      localStorage.setItem('token', res.data.token);
      history.push('/profile');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="auth-container">
      <h2>Signup</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Signup
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
