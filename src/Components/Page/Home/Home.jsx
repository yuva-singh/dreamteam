import React from "react";
import "./Home.css";
import HomeAboutus from "./HomeAboutus";
import Service from "./Service";
import Testimonials from "./Testimonials";
import { useNavigate } from "react-router-dom";
import Faq from "./Faq";

function Home() {
  const navigate = useNavigate();
  const GetSolution = () => {
    navigate("/contact")
  }
  return (
    <>
      <div className="container-fluid py-5 background-color">
          <div className="row justify-content-center py-3">

            <div className="col-xl-10 Content-center">
              <div>
                <h1 className="display-1 fw-bold">
                <span className="color">Empowering</span> Your Digital Journey.

                  <hr />
                </h1>
                <p>
               <sub className="fs-2 color">"</sub> With our innovative approach, every project is treated as our first and best. We bring your vision to life with passion and expertise, delivering standout websites and apps that exceed expectations.<sub className="fs-2 color">"</sub>
                </p>
                <button className="btn-style">Get Solution</button>
              </div>
            </div>
          </div>
        </div>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            {" "}
            <h1 className="fw-bold text-center display-5">
              {" "}
              Optimize Your Business Collaboration with Our Top Tool
            </h1>
          </div>
          <div className="row py-3 justify-content-center">
            <div className="col-xl-2 col-6 text-center">
              <div className="shadow-sm rounded-4 py-2 my-2">
                <i className="bi bi-person-fill fs-1"></i>
                <div className="FontSize">Client portals</div>
              </div>
            </div>
            <div className="col-xl-2 col-6 text-center">
              <div className="shadow-sm rounded-4 py-2 my-2">
                <i className="bi bi-microsoft-teams fs-1"></i>
                <div className="FontSize">
                  Teamwork
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-6 text-center">
              <div className="shadow-sm rounded-4 py-2 my-2">
                <i className="bi bi-globe fs-1"></i>
                <div className="FontSize">
                  Intranets &  Extranets
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-6 text-center">
              <div className="shadow-sm rounded-4 py-2 my-2">
                <i className="bi bi-book-half fs-1"></i>
                <div className="FontSize">
                  Knowledge &  bases
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-6 text-center">
              <div className="shadow-sm rounded-4 py-2 my-2">
                <i className="bi bi-file-earmark-diff-fill fs-1"></i>
                <div className="FontSize">
                  Project Management
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Service />
      <HomeAboutus />
      <Testimonials />
      <Faq/>
    </>
  );
}

export default Home;
