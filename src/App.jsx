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
import Layout from "./pages/Layout";
import CreateAd from "./pages/CreateAd";
import RequireAuth from "./components/requireAuth";
import ProfileHeader from "./components/ProfileHeader";
import Housing from "./pages/Housing";
import BeautyProducts from "./pages/BeautyProducts";
import Electronics from "./pages/Electronics";
import RealEstate from "./pages/RealEstate";
import Services from "./pages/Services";
import Auto from "./pages/Auto";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/housing" element={<Housing />} />
          <Route path="/beauty-products" element={<BeautyProducts />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/services" element={<Services />} />
          <Route path="/auto" element={<Auto />} />

          {/* protected */}
          <Route element={<RequireAuth />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/create-ad" element={<CreateAd />} />
            <Route path="/categories-list" element={<CategoriesList />} />
          </Route>

          {/* Missing */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
