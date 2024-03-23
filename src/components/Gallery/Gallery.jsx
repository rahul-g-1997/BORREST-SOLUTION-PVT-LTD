import { useState, useEffect } from "react";
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
} from "@mui/material";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/get_gallery"
        );
        // Prepend base URL to image URLs
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

    fetchImages();
  }, []);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{  marginBottom: 5 }}>
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
        Gallery
      </Typography>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid key={index} item xs={6} sm={4} md={3}>
            <Card>
              <CardActionArea onClick={() => handleOpen(image)}>
                <CardMedia
                  component="img"
                  height="200"
                  image={image.url}
                  alt={image.title}
                />
                <Typography variant="subtitle1" align="center">
                  {image.title}
                </Typography>
              </CardActionArea>
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

export default Gallery;
