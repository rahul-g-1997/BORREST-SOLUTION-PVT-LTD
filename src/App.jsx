import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";

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
        <FloatingWhatsApp
          phoneNumber="9637728916"
          accountName="Rahul Gaydhane"
          avatar="https://avatars.githubusercontent.com/u/88554827?s=400&u=e8d177ad96a42307280f0eb37060fce672bf6a51&v=4"
          allowEsc="true"
          allowClickAway="true"
          notification="true"
          notificationSound="true"
        />
      </Container>
    </div>
  );
}
