import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import "./ResponsiveCard.css"; // Import CSS file for styling

// ResponsiveCard Component
// eslint-disable-next-line react/prop-types
const ResponsiveCard = ({ image, title, description, link }) => {
  return (
    // Card component with custom styling and background color
    <Card className="responsive-card" sx={{ backgroundColor: "#03783f", p: 1 }}>
      {/* CardActionArea for clickable area */}
      <CardActionArea className="card-action-area">
        {/* CardMedia for displaying image */}
        <CardMedia
          component="img"
          height="170"
          image={image}
          alt={title}
          className="card-image"
        />
        {/* CardContent for displaying description */}
        <CardContent className="card-content">
          {/* Typography for displaying description */}
          <Typography
            variant="body2"
            color="text.secondary"
            className="description"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* Additional CardContent for displaying title and button */}
      <CardContent>
        {/* Typography for displaying title */}
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          sx={{ fontFamily: "Carter One, sans-serif", color: "white" }} // Styling for title
        >
          {title}
        </Typography>
        {/* Button for redirecting to a link */}
        <Button
          href={link}
          target="_blank"
          rel="noopener"
          variant="contained"
          color="primary"
          sx={{
            border: "1px solid white",
            backgroundColor: "#038043",
            "&:hover": {
              backgroundColor: "#036639", // Change to the hover color you prefer
            },
          }}
        >
          Visit
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResponsiveCard;
