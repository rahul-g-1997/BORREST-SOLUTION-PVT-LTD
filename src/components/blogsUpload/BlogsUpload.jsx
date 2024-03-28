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
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const BlogsUpload = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({
    title: "",
    description: "",
    image: null,
    category: "", // Add category field
  });

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/get_blog");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    setNewData((prevBlog) => ({
      ...prevBlog,
      image: event.target.files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", newData.title);
    formData.append("description", newData.description);
    formData.append("image", newData.image);
    formData.append("category", newData.category);

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
        setNewData({
          title: "",
          description: "",
          image: null,
          category: "", // Reset category after submission
        });
        fetchData();
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
        fetchData();
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
        Upload
      </Typography>
      <Box mt={1}>
        <Grid container spacing={4}>
          {/* New Blog Form */}
          <Grid item xs={12}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                fullWidth
                labelId="category-label"
                name="category"
                value={newData.category}
                onChange={handleInputChange}
                variant="outlined"
                margin="normal"
              >
                <MenuItem value="Blog">Blog</MenuItem>
                <MenuItem value="Procedure">Procedure</MenuItem>
              </Select>

              <TextField
                fullWidth
                label="Title"
                name="title"
                value={newData.title}
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
                value={newData.description}
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
              {newData.image && <Typography>{newData.image.name}</Typography>}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ marginLeft: 2 }}
              >
                Save
              </Button>
            </form>
          </Grid>
          {/* Display Existing Blogs */}
          {data.map((data) => (
            <Grid key={data.id} item xs={12} sm={6} md={4}>
              <Card sx={{ position: "relative" }}>
                <CardActionArea>
                  <Typography variant="body2" color="text.secondary">
                    {data.category}
                  </Typography>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`http://127.0.0.1:8000/images/${data.image}`} // Assuming image URL is correct
                    alt={data.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(data.id)}
                  sx={{
                    position: "absolute",
                    bottom: 5,
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
      </Box>
    </Container>
  );
};

export default BlogsUpload;
