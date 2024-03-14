import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import { About, ContactPage, Error, Home } from "./pages";

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/BORREST-SOLUTION-PVT-LTD"
      element={<App />}
      errorElement={<Error />}
    >
      <Route index element={<Home />} />
      <Route path="contacts" element={<ContactPage />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);



root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <RouterProvider router={route}>
        <CssBaseline />
        <App />
      </RouterProvider>
    </ThemeProvider>
    ,
  </React.StrictMode>
);
