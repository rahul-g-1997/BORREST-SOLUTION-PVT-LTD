import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

// Copyright Component
export default function Copyright() {
  return (
    // Typography component to display copyright text
    <Typography
      variant="body2"
      color="white"
      align="center"
      fontSize="1rem"
      sx={{ backgroundColor: "#01723c", padding: "10px 0" }} // Styling for background color and padding
    >
      {"Copyright © "} {/* Copyright symbol */}
      {/* Link component for the company name */}
      <Link
        color="inherit"
        href="https://data-engine.co/"
        style={{ cursor: "pointer" }} // Styling for cursor as pointer
      >
        DataEngine Pvt Ltd
      </Link>{" "}
      {/* Company name */}
      {new Date().getFullYear()}. {/* Current year */}
    </Typography>
  );
}
