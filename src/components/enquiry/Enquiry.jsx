import { useState } from "react";
import { Box, Typography, TextField, Button, Snackbar } from "@mui/material";

const Enquiry = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the logic to handle the enquiry submission
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // After submission, you can clear the form fields
    setName("");
    setEmail("");
    setMessage("");
    // Display Snackbar to indicate successful submission
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box mt={4}>
      <Typography variant="h5" mb={2}>
        Send Enquiry
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          mb={2}
        />
        <TextField
          label="Email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          mb={2}
        />
        <TextField
          label="Message"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          mb={2}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Enquiry submitted successfully!"
      />
    </Box>
  );
};

export default Enquiry;
