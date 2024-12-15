import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between Sign Up and Login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Save user data (For real-world apps, use a backend API here)
    localStorage.setItem('user', JSON.stringify({ email, password }));
    setIsSignUp(false); // Redirect to Login after Sign Up
    alert('Sign Up successful! Please log in.');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser?.email === email && savedUser?.password === password) {
      alert('Login successful!');
      // Redirect to another page or handle login success
    } else {
      setError('Invalid email or password');
    }
  };

  const styles = {
    authContainer: {
      marginTop: '50px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    buttonFullWidth: {
      marginTop: '15px',
    },
    textDanger: {
      fontSize: '14px',
    },
  };

  return (
    <Container style={styles.authContainer}>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center my-4">{isSignUp ? 'Sign Up' : 'Log In'}</h2>

          <Form onSubmit={isSignUp ? handleSignUp : handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {isSignUp && (
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>
            )}

            {error && <p style={styles.textDanger}>{error}</p>}

            <Button variant="primary" type="submit" className="w-100" style={styles.buttonFullWidth}>
              {isSignUp ? 'Sign Up' : 'Log In'}
            </Button>
          </Form>

          <div className="text-center mt-3">
            <Button
              variant="link"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError('');
              }}
            >
              {isSignUp ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
            </Button>
          </div>
              </Col>
            </Row>
          </Container>
        
  );
};

export default AuthPage;
