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
  TextField,
  Button,
  IconButton,
  Container,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const BlogsUpload = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    image: null,
  });

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/get_blog");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    setNewBlog((prevBlog) => ({
      ...prevBlog,
      image: event.target.files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("description", newBlog.description);
    formData.append("image", newBlog.image);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/add_blog",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        setNewBlog({
          title: "",
          description: "",
          image: null,
        });
        fetchBlogs();
      }
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  const handleDelete = async (blogId) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/delete_blog/${blogId}`
      );
      if (response.status === 200) {
        fetchBlogs();
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ marginBottom: 5 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        marginTop={7}
        sx={{ color: "#046f3b", fontFamily: "Carter One, sans-serif" }}
      >
        Articles
      </Typography>
      <Box mt={4}>
        <Grid container spacing={4}>
          {/* New Blog Form */}
          <Grid item xs={12}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={newBlog.title}
                onChange={handleInputChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Description"
                name="description"
                value={newBlog.description}
                onChange={handleInputChange}
                variant="outlined"
                margin="normal"
              />
              <input
                accept="image/*"
                id="contained-button-file"
                type="file"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" component="span">
                  Upload Image
                </Button>
              </label>
              {newBlog.image && <Typography>{newBlog.image.name}</Typography>}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ marginLeft: 2 }}
              >
                Add Blog
              </Button>
            </form>
          </Grid>
          {/* Display Existing Blogs */}
          {blogs.map((blog) => (
            <Grid key={blog.id} item xs={12} sm={6} md={4}>
              <Card sx={{ position: "relative" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={blog.image}
                    alt={blog.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {blog.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(blog.id)}
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    color: "error",
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default BlogsUpload;
