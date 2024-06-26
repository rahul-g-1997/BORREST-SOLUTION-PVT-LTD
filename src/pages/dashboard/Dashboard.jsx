import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useSelector, useDispatch } from "react-redux";
import { toggleLogin } from "../../rtk/reducer/loginReducer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import LogoutIcon from "@mui/icons-material/Logout";
import CollectionsIcon from "@mui/icons-material/Collections";
import { BlogsUpload, Enquiry, GalleryUpload } from "../../components";
import { useState } from "react";
import style from "./dashboard.module.css";

function Copyright(props) {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://data-engine.co/">
        DataEngine Pvt Ltd
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#046f3b",
    },
  },
});

export default function Dashboard() {
  const [showBlogsUpload, setShowBlogsUpload] = useState(true);
  const [showGalleryUpload, setShowGalleryUpload] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <ListItemButton
              onClick={() => {
                setShowBlogsUpload(true);
                setShowGalleryUpload(false);
                setShowEnquiry(false);
              }}
            >
              <ListItemIcon>
                <RssFeedIcon />
              </ListItemIcon>
              <ListItemText primary="Blogs" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                setShowBlogsUpload(false);
                setShowGalleryUpload(true);
                setShowEnquiry(false);
              }}
            >
              <ListItemIcon>
                <CollectionsIcon />
              </ListItemIcon>
              <ListItemText primary="Gallery" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                setShowBlogsUpload(false);
                setShowGalleryUpload(false);
                setShowEnquiry(true);
              }}
            >
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Enquiry" />
            </ListItemButton>
            <ListItemButton onClick={() => dispatch(toggleLogin())}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItemButton>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container
            maxWidth="xl"
            sx={{
              p: "20px",
              width: "auto",
              transition: "margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
            }}
          >
            <div className={style.container}>
              {showBlogsUpload && <BlogsUpload />}
              {showGalleryUpload && <GalleryUpload />}
              {showEnquiry && <Enquiry />}
              <Copyright sx={{ pt: 4 }} />
            </div>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
