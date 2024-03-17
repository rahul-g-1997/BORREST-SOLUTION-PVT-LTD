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
          sx={{
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
