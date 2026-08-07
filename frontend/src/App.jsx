import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Electronics from "./pages/Electronics";
import Fashion from "./pages/Fashion";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import Laptop from "./pages/Laptop";
import Headphones from "./pages/Headphones";
import Watch from "./pages/Watch";
import LaptopCollection from "./pages/laptopCollection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/laptops" element={<LaptopCollection />} />
      <Route path="/products/laptop/:type" element={<Laptop />} />
      <Route path="/products/headphones" element={<Headphones />} />
      <Route path="/products/watch" element={<Watch />} />
    </Routes>
  );
}

export default App;