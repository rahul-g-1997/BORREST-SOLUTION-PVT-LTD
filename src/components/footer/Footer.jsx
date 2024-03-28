import { useSelector } from "react-redux"; // Importing useSelector from react-redux
import {
  Container,
  Grid,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material"; // Importing MUI components
import {
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material"; // Importing MUI icons
import Copyright from "../copyright/Copyright"; // Importing Copyright component

const Footer = () => {
  const isLogin = useSelector((state) => state.login.isLogin); // Using useSelector to get login state from Redux

  // If user is logged in, don't render the footer
  if (isLogin) {
    return null;
  }

  // Render footer section
  return (
    <section
      style={{
        padding: "32px 0",
        minHeight: "100px",
        backgroundColor: "#01723c",
        color: "#fff",
      }}
    >
      <Container>
        <Grid container spacing={7}>
          {/* Contact section */}
          <Grid item md={6} lg={4} style={{ marginBottom: "24px" }}>
            <div>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <List disablePadding>
                {/* Location */}
                <ListItem disableGutters>
                  <ListItemIcon>
                    <LocationOnIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Kurukshetra" />
                </ListItem>
                {/* Phone */}
                <ListItem disableGutters>
                  <ListItemIcon>
                    <PhoneIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="+91-9896810237" />
                </ListItem>
                {/* Email */}
                <ListItem disableGutters>
                  <ListItemIcon>
                    <EmailIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="borrestsolutions@gmail.com" />
                </ListItem>
              </List>
            </div>
            {/* Social media icons */}
            <div>
              <Typography variant="h6" gutterBottom mt={2}>
                Social
              </Typography>
              <IconButton
                href="https://www.facebook.com/vinod.bhatia.1804"
                style={{ color: "#fff" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://twitter.com/ppsv1230?s=20"
                style={{ color: "#fff" }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/vinodbhatia8372/"
                style={{ color: "#fff" }}
              >
                <InstagramIcon />
              </IconButton>
            </div>
          </Grid>
          {/* Info section */}
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
          {/* Links section */}
          <Grid item md={6} lg={4} style={{ marginBottom: "24px" }}>
            <div>
              <Typography variant="h6" gutterBottom>
                Links
              </Typography>
              <List disablePadding>
                {/* Home */}
                <ListItem disableGutters>
                  <ListItemText
                    primary={
                      <Typography
                        component="a"
                        href="/"
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
                {/* About */}
                <ListItem disableGutters>
                  <ListItemText
                    primary={
                      <Typography
                        component="a"
                        href="/gallery"
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        Gallery
                      </Typography>
                    }
                  />
                </ListItem>
                {/* About */}
                <ListItem disableGutters>
                  <ListItemText
                    primary={
                      <Typography
                        component="a"
                        href="/blogs"
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        blogs
                      </Typography>
                    }
                  />
                </ListItem>
                {/* About */}
                <ListItem disableGutters>
                  <ListItemText
                    primary={
                      <Typography
                        component="a"
                        href="/procedure"
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        Procedure
                      </Typography>
                    }
                  />
                </ListItem>
                {/* About */}
                <ListItem disableGutters>
                  <ListItemText
                    primary={
                      <Typography
                        component="a"
                        href="/about"
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
                {/* Contact */}
                <ListItem disableGutters>
                  <ListItemText
                    primary={
                      <Typography
                        component="a"
                        href="/contacts"
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
                {/* About */}
                <ListItem disableGutters>
                  <ListItemText
                    primary={
                      <Typography
                        component="a"
                        href="/login"
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        Login
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* Copyright */}
      <Copyright />
    </section>
  );
};

export default Footer;
