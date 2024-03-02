import React from "react";
import Lottie from "lottie-react";
import websiteDevelopment from "../../../Animation/Web App Development.json";

function Service() {
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row justify-content-center">
          <div className="col-xl-4">
            <div className="p-2 text-center">
              <div className="Content-center">
                <div>
                  <Lottie animationData={websiteDevelopment} loop={true} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 Content-center">
            <div className="p-2">
              <h1 className="fw-bold display-6">
                Do You Want To Generate More Leads We Know The <span className="color" >Solution</span>
              </h1>
              <h1 className="fs-5 fw-bold ">
                <i className="bi bi-check-circle color"></i> Online Exposure
              </h1>
              <h1 className="fs-5 fw-bold">
                <i className="bi bi-check-circle color"></i> Increased Revenue
              </h1>
              <h1 className="fs-5 fw-bold">
                <i className="bi bi-check-circle color"></i> SEO / SMO / PPC /
                SEM
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid footer-color">
        <div className="row justify-content-center py-5">
          <div className="col-xl-10">
            <h1 className="display-5 fw-bold text-center">
              We Are A Full-Stack Digital Creative Consulting Agency
            </h1>
            <div className="row">
              <div className="col-xl-4 px-2">
                <div className="shadow-sm rounded">
                  <div className="px-3 py-3">
                    <h1 className="text-center fs-4 fw-bold">
                      Website <span className="color">Design</span>
                    </h1>
                    <img
                      src={require("../../../Image/web.png")}
                      alt=""
                      className="img-fluid"
                    />
                    <p className="text-center fs-5">
                      Web design for online success, Specializing in creating
                      highly performing sites for mid-market to enterprise
                      businesses.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 px-2">
                <div className="shadow-sm rounded">
                  <div className="px-3 py-3">
                    <h1 className="text-center fs-4 fw-bold">
                      Website <span className="color">Development</span>
                    </h1>
                    <img
                      src={require("../../../Image/app.png")}
                      alt=""
                      className="img-fluid"
                    />
                    <p className="text-center fs-5">
                      We build websites that build your business, Step inside
                      the center of excellence where we build.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 px-2">
                <div className="shadow-sm rounded">
                  <div className="px-3 py-3">
                    <h1 className="text-center fs-4 fw-bold">
                      Digital <span className="color">Marketing</span>
                    </h1>
                    <img
                      src={require("../../../Image/seo.png")}
                      alt=""
                      className="img-fluid"
                    />
                    <p className="text-center fs-5">
                      Creative solutions to improve your business, Prospects are
                      people too. Marketing should be scientific, but never
                      robotic
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
