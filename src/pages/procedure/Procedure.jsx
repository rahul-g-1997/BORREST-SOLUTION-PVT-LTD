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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

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

      {/* Display blogs */}
      <Box mt={4}>
        {error ? (
          <Typography variant="body1" color="error" align="center">
            {error}
          </Typography>
        ) : (
          <Grid container spacing={isSmallScreen ? 2 : 4}>
            {data
              .filter((procedure) => procedure.category === "Procedure")
              .map((procedure) => (
                <Grid key={procedure.id} item xs={12}>
                  <Card
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: isSmallScreen ? "column" : "row",
                    }}
                  >
                    {/* Image */}
                    <CardMedia
                      component="img"
                      height="200"
                      image={`http://127.0.0.1:8000/images/${procedure.image}`} // Using procedure.image
                      alt={procedure.title} // Using procedure.title
                      sx={{ maxWidth: isSmallScreen ? "100%" : "200px" }}
                    />

                    {/* Content */}
                    <Box flexGrow={1}>
                      <CardActionArea>
                        <CardContent>
                          {/* Title */}
                          <Typography gutterBottom variant="h5" component="div">
                            {procedure.title} {/* Using procedure.title */}
                          </Typography>

                          {/* Description */}
                          <Typography variant="body2" color="text.secondary">
                            {procedure.description}
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
