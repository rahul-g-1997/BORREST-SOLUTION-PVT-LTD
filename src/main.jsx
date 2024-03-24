// Import necessary dependencies
import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import { About, ContactPage, Dashboard, Error, Home, LoginPage, Blogs, Gallery, Procedure} from "./pages";

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

// Create root element and root instance
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Create browser router and routes
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="contacts" element={<ContactPage />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="/procedure" element={<Procedure />} />
    </Route>
  )
);

// Render the application
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <RouterProvider router={route}>
        <CssBaseline />
        <App />
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
