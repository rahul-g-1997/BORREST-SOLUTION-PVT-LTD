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

const Procedure = () => {
  // Get current theme and screen size
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // State variables for data and error handling
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/get_blog");
        setData(response.data); // Set data from API response
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Error fetching blogs. Please try again later."); // Set error state if fetching fails
      }
    };

    fetchData(); // Call fetchData function on component mount
  }, []);

  return (
    <Container maxWidth="lg" sx={{ marginBottom: 5 }}>
      {/* Title */}
      <Typography
        sx={{
          color: "#046f3b",
          fontFamily: "Carter One, sans-serif",
        }}
        variant="h4"
        align="center"
        gutterBottom
        paddingTop={11}
      >
        Procedure
      </Typography>

      {/* Display error message if there's an error */}
      <Box mt={4}>
        {error ? (
          <Typography variant="body1" color="error" align="center">
            {error}
          </Typography>
        ) : (
          // Display procedures
          <Grid container spacing={isSmallScreen ? 2 : 4}>
            {data
              .filter((procedure) => procedure.category === "Procedure") // Filter procedures by category
              .map((procedure) => (
                <Grid key={procedure.id} item xs={12}>
                  <Card
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: isSmallScreen ? "column" : "row",
                    }}
                  >
                    {/* Procedure Image */}
                    <CardMedia
                      component="img"
                      height="200"
                      image={`http://127.0.0.1:8000/images/${procedure.image}`} // Render procedure image
                      alt={procedure.title} // Render procedure title as alt text
                      sx={{ maxWidth: isSmallScreen ? "100%" : "200px" }} // Adjust image width based on screen size
                    />

                    {/* Procedure Content */}
                    <Box flexGrow={1}>
                      <CardActionArea>
                        <CardContent>
                          {/* Procedure Title */}
                          <Typography gutterBottom variant="h5" component="div">
                            {procedure.title} {/* Render procedure title */}
                          </Typography>

                          {/* Procedure Description */}
                          <Typography variant="body2" color="text.secondary">
                            {procedure.description}{" "}
                            {/* Render procedure description */}
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
    </Container>
  );
};

export default Procedure;
