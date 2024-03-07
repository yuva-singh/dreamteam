import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Page/Home/Home";
import About from "./Components/Page/About/About";
import Blogs from "./Components/Page/Blog/Blogs";
import BlogSinglePage from "./Components/Page/Blog/BlogSinglePage";
import Contact from "./Components/Page/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ServicePage from "./Components/Page/Service/ServicePage";
import Join from "./Components/Page/Join/Join";
import ScrollToTop from "./TopToScroll";
import NotfoundPage from "./Components/Page/Notfound/NotFoundpage";
import Admin from "./Admin/Admin";
import UploadBlog from "./Admin/UploadBlog";
import ViewBlog from "./Admin/ViewBlog";
import AdminNavbar from "./Admin/AdminNavbar";
import Login from "./Admin/Login";

let App = () => {
  const location = useLocation();

  // Define routes where Navbar and Footer should not be displayed
  const adminRoutes = ['/admin', '/AdminNavbar', '/UploadBlog', '/viewblog','/dashboard'];

  // Check if the current route is an admin route
  const isAdminRoute = adminRoutes.some(route => location.pathname.startsWith(route));

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="BlogSinglePage" element={<BlogSinglePage />} />
        <Route path="services" element={<ServicePage />} />
        <Route path="Join" element={<Join />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotfoundPage />} />
        {/* admin */}
        <Route path='/dashboard' element={<Admin />}></Route>
        <Route path='/AdminNavbar' element={<AdminNavbar />}></Route>
        <Route path='/UploadBlog' element={<UploadBlog />}></Route> 
        <Route path='/ViewBlog' element={<ViewBlog />}></Route>
        {/* login */}
        <Route path='/admin' element={<Login />}></Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
