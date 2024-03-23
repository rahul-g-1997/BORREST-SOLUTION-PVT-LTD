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
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";

const Blogs = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/get_blog");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
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
        Articles
      </Typography>
      <Box mt={4} p={isSmallScreen ? 2 : 4}>
        <Grid container spacing={isSmallScreen ? 2 : 4}>
          {blogs.map((blog) => (
            <Grid key={blog.id} item xs={12} sm={6} md={4}>
              <Card sx={{ height: "100%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={blog.image}
                    alt={blog.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {blog.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Blogs;
