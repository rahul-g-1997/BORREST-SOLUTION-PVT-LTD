import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <section
      style={{ padding: "32px 0", backgroundColor: "#01723c", color: "#fff" }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item md={6} lg={3} style={{ marginBottom: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" style={{ marginBottom: "8px" }}>
                Address
              </Typography>
              <Link
                style={{
                  marginBottom: "4px",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <LocationOnIcon style={{ marginRight: "8px" }} />
                Kurukshetra
              </Link>
              <Link
                style={{
                  marginBottom: "4px",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <PhoneIcon style={{ marginRight: "8px" }} />
                Call +91-9896810237
              </Link>
              <Link
                style={{
                  marginBottom: "4px",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <EmailIcon style={{ marginRight: "8px" }} />
                demo@gmail.com
              </Link>
            </div>
            <div>
              <Typography variant="h6" style={{ marginBottom: "8px" }}>
                Social
              </Typography>
              <IconButton href="#" style={{ color: "#fff" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" style={{ color: "#fff" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" style={{ color: "#fff" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton href="#" style={{ color: "#fff" }}>
                <InstagramIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item md={6} lg={3} style={{ marginBottom: "24px" }}>
            <div>
              <Typography variant="h6" style={{ marginBottom: "8px" }}>
                Info
              </Typography>
              <Typography>
                Service Basis. we provides services related to forestry issues
                like planting,felling of trees,nursery plants project report
                preparation etc
              </Typography>
            </div>
          </Grid>
          <Grid item md={6} lg={2} style={{ marginBottom: "24px" }}>
            <div>
              <Typography variant="h6" style={{ marginBottom: "8px" }}>
                Links
              </Typography>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Link
                  href="index.html"
                  style={{
                    marginBottom: "4px",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Link>
                <Link
                  href="about.html"
                  style={{
                    marginBottom: "4px",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  About
                </Link>
                <Link
                  href="service.html"
                  style={{
                    marginBottom: "4px",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  Services
                </Link>
                <Link
                  href="why.html"
                  style={{
                    marginBottom: "4px",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  Why Us
                </Link>
                <Link
                  href="team.html"
                  style={{
                    marginBottom: "4px",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  Team
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item md={6} lg={3} style={{ marginBottom: "24px" }}>
            <div>
              <Typography variant="h6" style={{ marginBottom: "8px" }}>
                Subscribe
              </Typography>
              <form>
                <TextField label="Enter email" variant="outlined" fullWidth />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ marginTop: "8px" }}
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Footer;
