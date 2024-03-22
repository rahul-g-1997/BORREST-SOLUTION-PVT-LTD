import { useState } from "react";
import { TextField, Button, Typography, Container, Grid } from "@mui/material";

function PhotoUpload() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadPhoto = async () => {
    if (!file) {
      setMessage("Please select a photo to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", file);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/gallery/upload/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      setMessage(data.message);

      // Clear form after successful upload
      setTitle("");
      setFile(null);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Upload failed. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Upload Photo
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={handleTitleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <input
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" component="span">
              Choose Photo
            </Button>
          </label>
          {file && <Typography>{file.name}</Typography>}
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={uploadPhoto}>
            Upload
          </Button>
        </Grid>
        <Grid item xs={12}>
          {message && <Typography>{message}</Typography>}
        </Grid>
      </Grid>
    </Container>
  );
}

export default PhotoUpload;
