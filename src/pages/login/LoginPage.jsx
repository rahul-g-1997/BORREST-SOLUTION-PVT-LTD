import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Paper,
  Typography,
  Grid,
  Alert,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toggleLogin } from "../../rtk/reducer/loginReducer";

// Create a custom MUI theme
const customTheme = createTheme({
  palette: {
    primary: {
      main: "#046f3b",
    },
  },
});

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State variables for form data and login error
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;

    // Check if email and password match admin credentials
    if (email === "admin" && password === "admin") {
      // Dispatch Redux action to toggle login status
      dispatch(toggleLogin());
      setFormData({ email: "", password: "" }); // Clear form data
      navigate("/dashboard"); // Redirect to dashboard page
    } else {
      setLoginError(true); // Set login error to true if login fails
      setFormData({ email: "", password: "" }); // Clear form data
    }
  };

  // Function to handle input change in form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Grid container component="main" sx={{ height: "100vh", pt: 7 }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#046f3b" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              {/* Email and password input fields */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {/* Remember me checkbox */}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {/* Sign in button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              {/* Display login error message if loginError is true */}
              {loginError && (
                <Alert variant="filled" severity="error" sx={{ mb: 2 }}>
                  Incorrect email or password.
                </Alert>
              )}
              {/* Links for forgot password and sign up */}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
