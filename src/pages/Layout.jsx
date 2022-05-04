import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Layout;
