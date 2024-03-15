import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color="white"
      align="center"
      fontSize="1rem"
      sx={{ backgroundColor: "#01723c", padding: "10px 0" }}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://data-engine.co/"
        style={{ cursor: "pointer" }}
      >
        DataEngine Pvt Ltd
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
