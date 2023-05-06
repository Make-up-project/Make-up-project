import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./pages/NavAndFooter/Footer";
import Header from "./pages/NavAndFooter/Nav";
import Contact from "./pages/landing/ContactUs/Contact";
import About from "./pages/landing/aboutPage/About";
import Landing from "./pages/landing/landingPage/Landing";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Landing />} path="Landing" />
        <Route element={<Contact />} path="Contact" />
        <Route element={<About />} path="About" />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
