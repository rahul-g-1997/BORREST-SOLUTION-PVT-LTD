import { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Modal,
  Backdrop,
  Fade,
  Typography,
  Container,
  IconButton,
  Button,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const GalleryUpload = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/get_gallery");
      const baseUrl = "http://127.0.0.1:8000";
      const imagesWithFullUrl = response.data.map((image) => ({
        ...image,
        url: `${baseUrl}/${image.image}`,
      }));
      setImages(imagesWithFullUrl);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/delete_gallery/${id}`
      );
      if (response.status === 200) {
        fetchImages();
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const uploadPhoto = async () => {
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

      setTitle("");
      setFile(null);

      fetchImages();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ marginBottom: 5 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: 30,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: "#046f3b",
              fontFamily: "Carter One, sans-serif",
            }}
            variant="h4"
            align="center"
            gutterBottom
            margin={3}
          >
            Gallery
          </Typography>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <TextField
              label="Title"
              value={title}
              onChange={handleTitleChange}
              style={{ flex: 1 }} // Adjust the width of the TextField
            />
            <label htmlFor="contained-button-file">
              <input
                accept="image/*"
                id="contained-button-file"
                type="file"
                onChange={handleFileChange}
                style={{ display: "none" }}
                ref={fileInputRef}
              />
              <Button variant="contained" component="span">
                Add Image
              </Button>
            </label>
            {file && <Typography>{file.name}</Typography>}
            <Button variant="contained" color="primary" onClick={uploadPhoto}>
              Upload
            </Button>
          </div>
        </Container>
      </div>

      <Grid container spacing={2}>
        {[...images].reverse().map((image, index) => (
          <Grid key={index} item xs={6} sm={4} md={3}>
            <Card sx={{ position: "relative", minHeight: 250 }}>
              <CardActionArea onClick={() => handleOpen(image)}>
                <CardMedia
                  component="img"
                  height="200"
                  image={image.url}
                  alt={image.title}
                />
                <Typography variant="subtitle1" align="center">
                  {image.title} {console.log(image.url)}
                </Typography>
              </CardActionArea>
              <IconButton
                aria-label="delete"
                onClick={() => handleDelete(image.id)}
                sx={{
                  position: "absolute",
                  top: 5,
                  right: 5,
                  color: "error",
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          sx: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        }}
      >
        <Fade in={open}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              boxShadow: 24,
              padding: 20,
            }}
          >
            <Typography variant="h5" mb={2}>
              {selectedImage && selectedImage.title}
            </Typography>
            <img
              src={selectedImage && selectedImage.url}
              alt={selectedImage && selectedImage.title}
              style={{ maxWidth: "100%" }}
            />
          </div>
        </Fade>
      </Modal>
    </Container>
  );
};

export default GalleryUpload;
