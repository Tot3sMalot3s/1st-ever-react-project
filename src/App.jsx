import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";



const App = () => {
  return <Home/>;
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
  </Routes>

};

export default App;