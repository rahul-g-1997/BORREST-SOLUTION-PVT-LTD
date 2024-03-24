import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { DrawerAppBar, Footer } from "./components";
import { useSelector } from "react-redux";
import avatar from "./assets/images/WhatsApplogo.jpeg";

const Layout = () => {
  const isLogin = useSelector((state) => state.login.isLogin);

  return (
    <div>
      <Container style={{ margin: 0, padding: 0 }}>
        <Box style={{ width: "100vw" }}>
          {!isLogin && <DrawerAppBar />}
          <Outlet />
          <Footer />
        </Box>
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
