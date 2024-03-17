import {
  Container,
  Grid,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Copyright from "../copyright/Copyright";

const Footer = () => {
  return (
    <section
      style={{
        padding: "32px 0",
        minHeight: "100px", // Adjusted minHeight instead of height
        backgroundColor: "#01723c",
        color: "#fff",
      }}
    >
      <Container>
        <Grid container spacing={7}>
          <Grid item md={6} lg={4} style={{ marginBottom: "24px" }}>
            <div>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <List disablePadding>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <LocationOnIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Kurukshetra" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <PhoneIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="+91-9896810237" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <EmailIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="borrestsolutions@gmail.com" />
                </ListItem>
              </List>
            </div>
            <div>
              <Typography variant="h6" gutterBottom mt={2}>
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
          <Grid item md={6} lg={4} style={{ marginBottom: "24px" }}>
            <div>
              <Typography variant="h6" gutterBottom>
                Info
              </Typography>
              <Typography>
                Service Basis. we provide services related to forestry issues
                like planting, felling of trees, nursery plants project report
                preparation etc.
              </Typography>
            </div>
          </Grid>
          <Grid item md={6} lg={4} style={{ marginBottom: "24px" }}>
            <div>
              <Typography variant="h6" gutterBottom>
                Links
              </Typography>
              <List disablePadding>
                <ListItem disableGutters>
                  <ListItemText
                    primary={
                      <Typography
                        component="a"
                        href="index.html"
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        Home
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText
                    primary={
                      <Typography
                        component="a"
                        href="about.html"
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        About
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText
                    primary={
                      <Typography
                        component="a"
                        href="service.html"
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        Contact
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Copyright />
    </section>
  );
};

export default Footer;
