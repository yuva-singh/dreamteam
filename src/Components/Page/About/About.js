import React from "react";
import Lottie from "lottie-react";
import marketing from "../../../Animation/marketing.json";

function About() {
  return (
    <>
      <div className="container-fluid py-5 background-color">
        <div className="row">
          <div className="col-xl-12 py-2">
            <h1 className="fw-bold text-center display-5">
              About <span className="color">Us</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="container my-5">
        {/* <h1 className="display-5 fw-bold text-center">A FEW WORDS ABOUT US</h1> */}
        <div className="row bg-light py-4 px-2 rounded shadow-sm">
          <div className="col-xl-4">
            <img
              src={require("../../../Image/about-2.png")}
              alt=""
              className="img-fluid rounded"
            />
          </div>
          <div className="col-xl-8 Content-center">
            DreamTeam is a Best Web Development Company with the latest
            and innovative ideas generating and thus creating a tremendous craft
            in the form of a website. We gives you the desired results within
            the affordable costs. DreamTeam has an expertise team of
            professionals who work with their full dedication and work out the
            best for its customers. We look to manufacture enduring websites for
            our customers which are user friendly and handy for them.
          </div>
        </div>

        <div className="row bg-light py-4 px-2 rounded shadow-sm my-5 row-reverse">
        <div className="col-xl-4">
            <img
              src={require("../../../Image/about-1.png")}
              alt=""
              className="img-fluid rounded"
            />
          </div>
          <div className="col-xl-8 Content-center">
            Our devoted team of professionals includes designers, developers,
            search engine optimization professionals, advertisers, and
            specialists long periods of experience and are enthusiastic about
            their work.
          </div>
          
        </div>

        <div className="row bg-light py-4 px-2 rounded shadow-sm my-5">
          <div className="col-xl-4">
            <img
              src={require("../../../Image/about-3.png")}
              alt=""
              className="img-fluid rounded"
            />
          </div>
          <div className="col-xl-8 Content-center">
            If you want to upgrade your work in this highly competitive business
            environment through Customized website designing and Software
            Development, then feel free to contact us and our team of
            Professionals will surely help you to manage your work or business
            according to your needs and ambitions, policies, rules and
            regulations, corporate needs to create the best customized design
            for your organization.
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-6 my-3">
            <div className="px-4 py-5 bg-white shadow-sm rounded">
              <h1 className="text-center fw-bold">
                Our Mi<span className="color">ss</span>ion
              </h1>
              <p className="text-center">
                To increase our clients’ expectations with us by providing them
                with
              </p>
              <p><i className="bi bi-check-circle color"></i> Innovative ideas and Assurance, with our services</p>
              <p><i className="bi bi-check-circle color"></i> Full technical support of our team</p>
              <p><i className="bi bi-check-circle color"></i> Provides best advice for our customers</p>
              {/* <p><i className="bi bi-check-circle color"></i> Provides best Product in less amount  </p> */}
            </div>
          </div>
          <div className="col-xl-6 my-3">
            <div className="px-4 py-5 bg-white shadow-sm rounded">
              <h1 className="text-center fw-bold">
                Our vi<span className="color">si</span>on
              </h1>
              <p className="text-center">
              with our courage and ability to do a work with full zeal and enthusiasm we can help you to image your work.
              </p>
              <p><i className="bi bi-check-circle color"></i> We give you the best website for your organization or work</p>
              <p><i className="bi bi-check-circle color"></i> We make branding strategies for our customers</p>
              <p><i className="bi bi-check-circle color"></i> We provide best digital marketing services</p>
            </div>
          </div>
        </div>

        <div className="row my-5 footer-color rounded px-3">
          <div className="col-xl-6 Content-center">
            <div>
            <h1 className="display-7 fw-bold">Powerful & <span className="color">Awesome</span> Marketing</h1>
            <p className="p-3 my-2 shadow-sm rounded">Our approach in building our business plays a big role by providing digital marketing to our business</p>
            <p className="p-3 my-2 shadow-sm rounded">Your web image is one through which you can prove to your customer that you are best in your field</p>
            <p className="p-3 my-2 shadow-sm rounded">Our purpose is to build a stronger image of our customers brand</p>
            </div>

          </div>
          <div className="col-xl-6 rounded Content-center">
           <div>
           <Lottie animationData={marketing} loop={false} />
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
