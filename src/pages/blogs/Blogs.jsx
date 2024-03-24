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
                        height="200"
                        image={`http://127.0.0.1:8000/images/${blog.image}`}
                        alt={blog.title}
                        sx={{ width: "100%" }}
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
                            What is Lorem Ipsum? Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                            Why do we use it? It is a long established fact that
                            a reader will be distracted by the readable content
                            of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less
                            normal distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English. Many desktop publishing packages
                            and web page editors now use Lorem Ipsum as their
                            default model text, and a search for 'lorem ipsum'
                            will uncover many web sites still in their infancy.
                            Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose
                            (injected humour and the like). Where does it come
                            from? Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                            Finibus Bonorum et Malorum" (The Extremes of Good
                            and Evil) by Cicero, written in 45 BC. This book is
                            a treatise on the theory of ethics, very popular
                            during the Renaissance. The first line of Lorem
                            Ipsum, "Lorem ipsum dolor sit amet..", comes from a
                            line in section 1.10.32. The standard chunk of Lorem
                            Ipsum used since the 1500s is reproduced below for
                            those interested. Sections 1.10.32 and 1.10.33 from
                            "de Finibus Bonorum et Malorum" by Cicero are also
                            reproduced in their exact original form, accompanied
                            by English versions from the 1914 translation by H.
                            Rackham. Where can I get some? There are many
                            variations of passages of Lorem Ipsum available, but
                            the majority have suffered alteration in some form,
                            by injected humour, or randomised words which don't
                            look even slightly believable. If you are going to
                            use a passage of Lorem Ipsum, you need to be sure
                            there isn't anything embarrassing hidden in the
                            middle of text. All the Lorem Ipsum generators on
                            the Internet tend to repeat predefined chunks as
                            necessary, making this the first true generator on
                            the Internet. It uses a dictionary of over 200 Latin
                            words, combined with a handful of model sentence
                            structures, to generate Lorem Ipsum which looks
                            reasonable. The generated Lorem Ipsum is therefore
                            always free from repetition, injected humour, or
                            non-characteristic words etc.
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
