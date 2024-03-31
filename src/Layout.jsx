import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { DrawerAppBar, Footer } from "./components";
import { useSelector } from "react-redux";
import avatar from "./assets/images/WhatsApplogo.jpeg";

const Layout = () => {
  const isLogin = useSelector((state) => state.login.isLogin); // Get login state from Redux store

  return (
    <div>
      {/* Main container */}
      <Container style={{ margin: 0, padding: 0 }}>
        <Box style={{ width: "100vw" }}>
          {/* Render DrawerAppBar component if not logged in */}
          {!isLogin && <DrawerAppBar />}

          {/* Render nested routes */}
          <Outlet />

          {/* Render Footer component */}
          <Footer />
        </Box>

        {/* Floating WhatsApp button */}
        <FloatingWhatsApp
          phoneNumber="+919896810237"
          accountName="Mr. Vinod Bhatia, IFS"
          avatar={avatar}
          allowEsc={true}
          allowClickAway={true}
          notification={true}
          notificationSound={true}
          notificationDelay={7}
        />
      </Container>
    </div>
  );
};

export default Layout;
