import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Modal,
  Backdrop,
  Fade,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// Blogs Component
const Blogs = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open modal
  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  // Function to close modal
  const handleClose = () => {
    setOpen(false);
  };

  // Fetch data effect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/get_blog");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Error fetching blogs. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ marginBottom: 5 }}>
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: "#046f3b",
          fontFamily: "Carter One, sans-serif",
        }}
        paddingTop={11}
      >
        Articles
      </Typography>
      {/* Error handling */}
      <Box mt={4}>
        {error ? (
          <Typography variant="body1" color="error" align="center">
            {error}
          </Typography>
        ) : (
          <Grid container spacing={isSmallScreen ? 2 : 4}>
            {/* Display blogs */}
            {data
              .filter((blog) => blog.category === "Blog")
              .map((blog) => (
                <Grid key={blog.id} item xs={12}>
                  <Card
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: isSmallScreen ? "column" : "row",
                    }}
                  >
                    {/* Blog Image */}
                    <CardActionArea
                      onClick={() => handleOpen(blog)}
                      sx={{ flex: "30%" }}
                    >
                      <CardMedia
                        component="img"
                        height="500"
                        image={`http://127.0.0.1:8000/images/${blog.image}`}
                        alt={blog.title}
                        sx={{ maxWidth: isSmallScreen ? "100%" : "400px" }}
                      />
                    </CardActionArea>
                    {/* Blog Content */}
                    <Box sx={{ flex: "70%" }}>
                      <CardActionArea>
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            align={isSmallScreen ? "center" : "inherit"}
                          >
                            {blog.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              marginBottom: 1,
                              fontStyle: "italic",
                              textAlign: isSmallScreen ? "center" : "inherit",
                            }}
                          >
                            {blog.description}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontWeight: "bold",
                              textAlign: isSmallScreen ? "center" : "inherit",
                            }}
                          >
                            Date:{" "}
                            {new Date(blog.created_at).toLocaleDateString(
                              "en-GB"
                            )}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontWeight: "bold",
                              textAlign: isSmallScreen ? "center" : "inherit",
                            }}
                          >
                            Time:{" "}
                            {new Date(blog.created_at).toLocaleTimeString(
                              "en-US",
                              { hour: "2-digit", minute: "2-digit" }
                            )}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Box>
                  </Card>
                </Grid>
              ))}
          </Grid>
        )}
      </Box>
      {/* Modal for displaying selected image */}
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
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              boxShadow: 24,
              padding: 4,
              outline: 0,
            }}
          >
            <Typography variant="h5" mb={2} align="center">
              {selectedImage && selectedImage.title}
            </Typography>
            <CardMedia
              component="img"
              src={`http://127.0.0.1:8000/images/${
                selectedImage && selectedImage.image
              }`}
              alt={selectedImage && selectedImage.title}
              sx={{ width: "100%" }}
            />
          </Box>
        </Fade>
      </Modal>
    </Container>
  );
};

export default Blogs;
