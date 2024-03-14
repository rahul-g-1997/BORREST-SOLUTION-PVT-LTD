import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  CssBaseline,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/images/logo.png";

const drawerWidth = 240; // Specify the drawer width here
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", width: drawerWidth }}
    >
      <img src={Logo} alt={"logo"} loading="logo" width="70px" />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <img
              src={Logo}
              alt={"logo"}
              loading="logo"
              style={{ width: "70px", height: "auto" }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                color: "#000",
                fontSize: {
                  xs: "1rem", // Define font size for extra small screens (mobile)
                  sm: "inherit", // Inherit font size for small screens and above
                },
              }}
            >
              BORREST SOLUTION PVT LTD
            </Typography>
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              },
            }}
          >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#000", marginLeft: 2 }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth, // Apply the specified width to the drawer
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
