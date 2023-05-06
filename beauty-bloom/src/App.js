import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./pages/NavAndFooter/Footer";
// import Header from "./pages/NavAndFooter/Nav";
import Contact from "./pages/landing/ContactUs/Contact";
import About from "./pages/landing/aboutPage/About";
import Landing from "./pages/landing/landingPage/Landing";
// import Product from  "./pages/Product/product"
import NavListMenu from "./pages/NavAndFooter/Nav";

import Store from "./pages/Store/Store";

function App() {
  return (
    <BrowserRouter>
      <NavListMenu />
      {/* <Product/> */}
      <Routes>
        <Route path="/" />
        <Route element={<Landing />} path="Landing" />
        <Route element={<Contact />} path="Contact" />
        <Route element={<About />} path="About" />
        <Route element={<Store />} path="store" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
