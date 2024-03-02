import React from "react";
import logo from "../../Image/logo.png";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <>
      <div className="container-fluid footer-color py-5">
        <div className="row justify-content-center py-3">
          <div className="col-xl-10">
           <div className="row">
           <div className="col-xl-3">
            <Link to="/" class="navbar-brand" href="#">
            <h4 className="fw-bold">DreamTeam</h4>
            </Link>
            <p className="">
              DreamTeam is a Best Web Development Company with the latest
              and innovative ideas generating and thus creating a tremendous
              craft in the form of a website. We gives you the desired results
              within the affordable costs
            </p>
            
          </div>
          <div className="col-xl-3">
            <h4 className="fw-bold">Company</h4>
            <p><Link to={"/about"} className="text-dark">Who We Are</Link></p>
            <p><Link to={"/Services"} className="text-dark">What We Do</Link></p>
            <p><Link to={"/join"} className="text-dark">Join Us</Link></p>
            <p><Link to={"/blog"} className="text-dark">Blog</Link></p>
            <p><Link to={"/contact"} className="text-dark">Contact Us</Link></p>

          </div>
          <div className="col-xl-3">
          <h4 className="fw-bold">Services</h4>
            <p><Link to={"/Services"} className="text-dark">Website Design</Link></p>
            <p><Link to={"/Services"} className="text-dark">Website Development</Link></p>
            <p><Link to={"/Services"} className="text-dark">Digital Marketing</Link></p>
            <p><Link to={"/Services"} className="text-dark">App Development</Link></p>
            <p><Link to={"/Services"} className="text-dark">Graphic Designing</Link></p>
          </div>
          <div className="col-xl-3">
          <h4 className="fw-bold">Contact Us</h4>
            <p> <i className="bi bi-geo-alt text-secondary"></i> Dwarka, New Delhi, 110043</p>
            <p><i className="bi bi-telephone text-secondary"></i><a href="tel:+919319314403" className="text-dark">(+91) 8700282172</a></p>
            <p><i className="bi bi-envelope text-secondary"></i><a href="mailto:info@DreamTeam.com" className="text-dark"> info@DreamTeam.com</a></p>
            <div className="d-flex">
                <i className="bi bi-facebook  ions fs-4 text-primary"></i>
                <i className="bi bi-whatsapp mx-2 ions fs-4 color"></i>
                <i className="bi bi-instagram mx-2 ions fs-4 text-danger"></i>
                <i className="bi bi-twitter mx-2 ions fs-4 text-info"></i>
            </div>
          </div>
           </div>
          </div>
          
          <hr />
          <div className="col-xl-10">
            <p style={{fontSize:"small"}}>DreamTeam is an integrated social media and digital marketing enterprise in Delhi. With a team of over seventy five+, we are an award-triumphing complete-stack digital advertising organization in India imparting creative and innovative answers for manufacturers seeking to develop their groups on line, If you are studying this then you definately’re on the proper website to onboard one of the pleasant innovative advertising company in India.</p>
            <p style={{fontSize:"small"}}>Privacy Policy | All Rights Reserved by <span className="color"> <a href="https://DreamTeam.com/">DreamTeam</a> </span></p>
          </div >
        </div>
      </div>
    </>
  );
}

export default Footer;
