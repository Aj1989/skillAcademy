import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div id="rootLayout">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
export default RootLayout;
