import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loginMsg, setLoginMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoginMsg("");

    // Prepare form data
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("password", password);

    try {
      // Replace with your API endpoint
      const response = await fetch("YOUR_BACKEND_URL_HERE", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      const result = await response.json();

      if (result.success) {
        setLoginMsg("Login successful!");
        // Redirect to the admin dashboard
        window.location.href = "/admin/dashboard";
      } else {
        setLoginMsg("Incorrect Credentials");
      }
    } catch (error) {
      setLoginMsg("An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: "#F3EBF6" }}>
      <Card style={{ width: "400px", padding: "20px", borderRadius: "1.5em", boxShadow: "0px 11px 35px 2px rgba(0, 0, 0, 0.14)" }}>
        <Card.Title className="text-center" style={{ color: "#8C55AA", fontWeight: "bold", fontSize: "23px" }}>
          ADMIN LOGIN
        </Card.Title>
        {loginMsg && <Alert variant="danger" className="text-center">{loginMsg}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ borderRadius: "20px", padding: "10px", textAlign: "center" }}
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ borderRadius: "20px", padding: "10px", textAlign: "center" }}
            />
          </Form.Group>
          <Button
            type="submit"
            className="w-100"
            disabled={loading}
            style={{
              borderRadius: "5em",
              background: "linear-gradient(to right, #9C27B0, #E040FB)",
              color: "#fff",
              border: "none",
              fontSize: "13px",
              boxShadow: "0 0 20px 1px rgba(0, 0, 0, 0.04)",
            }}
          >
            {loading ? "Logging in..." : "LOGIN"}
          </Button>
        </Form>
        <div className="text-center mt-3">
          <small className="role-msg">Are you a student? <a href="/login_student">Login Here</a></small>
        </div>
      </Card>
    </Container>
  );
};

export default AdminLogin;
