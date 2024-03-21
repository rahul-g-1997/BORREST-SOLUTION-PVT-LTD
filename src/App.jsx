import Container from "@mui/material/Container";
import { Provider } from "react-redux";
import { store } from "./rtk/store";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { DrawerAppBar, Footer } from "./components";
import avatar from "./assets/images/WhatsApplogo.jpeg";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Container style={{ margin: 0, padding: 0 }}>
          <Box style={{ width: "100vw" }}>
            <DrawerAppBar />
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
      </Provider>
    </div>
  );
}
