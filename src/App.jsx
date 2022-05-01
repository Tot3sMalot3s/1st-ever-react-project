import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Favs from "./pages/Favs";
import Inbox from "./pages/Inbox";
import CategoriesList from "./pages/CategoriesList";

const App = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        {/* protected */}
        <Route path="/profile" elemtn={<Profile />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/categories-list" element={<CategoriesList />} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
