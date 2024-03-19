import { useState, useRef } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Box,
  ThemeProvider,
} from "@mui/material";
import emailjs from "@emailjs/browser"; // Import emailjs library
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { createTheme } from "@mui/material/styles"; // Import createTheme

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
        "service_l9krszx",
        "template_e73ritz",
        form.current,
        "cVZZd4pbPF11Q9kC7"
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

  // Custom theme with primary color set to #046f3b
  const customTheme = createTheme({
    palette: {
      primary: {
        main: "#046f3b",
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Container maxWidth="lg" sx={{ marginTop: 11, marginBottom: 5 }}>
        <Typography
          sx={{
            color: "#046f3b",
            fontFamily: "Carter One, sans-serif",
          }}
          variant="h4"
          align="center"
          gutterBottom
          margin={7}
        >
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundColor: "#038043",
              borderRadius: "20px 0px 0px 20px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Grid
              padding={3}
              m={3}
              sx={{
                backgroundColor: "#428c68",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocationOnIcon sx={{ color: "#ffffff", marginRight: "10px" }} />
              <Typography variant="body1" sx={{ color: "#ffffff" }}>
                Kurukshetra
              </Typography>
            </Grid>
            <Grid
              padding={3}
              m={3}
              sx={{
                backgroundColor: "#428c68",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Email icon */}
              <EmailIcon sx={{ color: "#ffffff", marginRight: "10px" }} />
              {/* Email */}
              <Typography variant="body1" sx={{ color: "#ffffff" }}>
                borrestsolutions@gmail.com
              </Typography>
            </Grid>
            <Grid
              padding={3}
              m={3}
              sx={{
                backgroundColor: "#428c68",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Phone icon */}
              <PhoneIcon sx={{ color: "#ffffff", marginRight: "10px" }} />
              {/* Contact number */}
              <Typography variant="body1" sx={{ color: "#ffffff" }}>
                +91-9896810237
              </Typography>
            </Grid>

            {/* Rest of your contact details */}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              Reach out to us with any questions, feedback, or inquiries you may
              have. Simply fill out the form below, and we&apos;ll be in touch
              shortly.
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              ref={form}
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
                required
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField
                label="Contact Number"
                variant="outlined"
                fullWidth
                name="contactNumber"
                type="tel"
                value={formData.contactNumber}
                onChange={handleChange}
                required
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
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  backgroundColor: "#038043",
                  "&:hover": {
                    backgroundColor: "#036639",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ContactPage;
