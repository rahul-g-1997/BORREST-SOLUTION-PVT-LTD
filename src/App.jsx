import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

import { DrawerAppBar, Footer } from "./components";

export default function App() {
  return (
    <div>
      <Container style={{ margin: 0, padding: 0 }}>
        <Box style={{ width: "100vw" }}>
          <DrawerAppBar />
          <Outlet />
          <Footer />
        </Box>
      </Container>
    </div>
  );
}
