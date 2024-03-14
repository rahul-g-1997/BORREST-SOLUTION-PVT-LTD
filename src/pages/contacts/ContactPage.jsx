import { useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
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
      contactNumber: "",
      message: "",
    });
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 11 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Contact Number"
          variant="outlined"
          fullWidth
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default ContactPage;
