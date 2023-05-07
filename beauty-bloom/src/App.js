import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./pages/NavAndFooter/Footer";
// import Header from "./pages/NavAndFooter/Nav";
import Contact from "./pages/landing/ContactUs/Contact";
import About from "./pages/landing/aboutPage/About";
import Landing from "./pages/landing/landingPage/Landing";
import Product from  "./pages/product/product"
import NavListMenu from "./pages/NavAndFooter/Nav"
import Cart from "./pages/product/Cart"
function App() {
  return (
    <BrowserRouter>
       <NavListMenu />  
     
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Product />} path="Product" />

        <Route element={<Cart />} path="Cart" />

        <Route path="/" />
        <Route element={<Contact />} path="Contact" />
        <Route element={<About />} path="About" />
      </Routes>
      <Footer />
    </BrowserRouter>


  );
}

export default App;
