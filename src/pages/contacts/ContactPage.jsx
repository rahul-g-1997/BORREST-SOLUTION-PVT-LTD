import { useState, useRef } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import emailjs from "@emailjs/browser"; // Import emailjs library

const ContactPage = () => {
  const form = useRef(); // Create a ref for the form

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

    emailjs
      .sendForm(
        "service_u6rxflc",
        "template_34w96ao",
        form.current,
        "AojJRsvCrxiKFHOFE"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          // Reset form after submission
          setFormData({
            name: "",
            email: "",
            contactNumber: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email sending failed:", error.text);
        }
      );
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 11, marginBottom: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        ref={form} // Set ref to the form
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
          required // Add required attribute
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required // Add required attribute
        />
        <TextField
          label="Contact Number"
          variant="outlined"
          fullWidth
          name="contactNumber"
          type="tel"
          value={formData.contactNumber}
          onChange={handleChange}
          required // Add required attribute
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
          required // Add required attribute
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default ContactPage;
