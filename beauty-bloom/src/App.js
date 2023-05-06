import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./pages/NavAndFooter/Footer";
// import Header from "./pages/NavAndFooter/Nav";
import Contact from "./pages/landing/ContactUs/Contact";
import About from "./pages/landing/aboutPage/About";
import Landing from "./pages/landing/landingPage/Landing";
// import Product from  "./pages/Product/product"
import NavListMenu from "./pages/NavAndFooter/Nav"
import Cart from "./pages/Product/Cart"
function App() {
  return (
    <BrowserRouter>
       <Cart /> 
      {/* <Product/> */}
      <Routes>
        <Route element={<Landing />} path="Landing" />
        <Route path="/" />
        <Route element={<Contact />} path="Contact" />
        <Route element={<About />} path="About" />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>


  );
}

export default App;
