import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your logic to handle form submission here
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 11 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          style={{ marginBottom: "1rem" }}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          style={{ marginBottom: "1rem" }}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          style={{ marginBottom: "1rem" }}
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginBottom: "1rem" }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactPage;
