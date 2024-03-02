import React from "react";
import Navbar from "./Components/Header/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Page/Home/Home";
import About from "./Components/Page/About/About";
import Blogs from "./Components/Page/Blog/Blogs";
import BlogSinglePage from "./Components/Page/Blog/BlogSinglePage";
import Contact from "./Components/Page/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ServicePage from "./Components/Page/Service/ServicePage";
import Join from "./Components/Page/Join/Join";
import ScrollToTop from "./TopToScroll";


let App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="BlogSinglePage" element={<BlogSinglePage />} />
        <Route path="services" element={<ServicePage />} />
        <Route path="Join" element={<Join />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;