import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const ResponsiveCard = ({ image, title, description, link }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
        <Button
          href={link}
          target="_blank"
          rel="noopener"
          variant="contained"
          color="primary"
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResponsiveCard;
