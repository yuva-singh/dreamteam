import React from "react";
import Lottie from "lottie-react";
import webSiteDesign from "../../../Animation/webSiteDesign.json";
import { useNavigate } from "react-router-dom";

function Join() {
  const navigate = useNavigate();
  const joinData = () => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <>
      <div className="container-fluid background-color">
        <div className="row">
          <div className="col-xl-12 py-3">
            <h1 className="fw-bold text-center display-6">
              Join <span className="color">Us</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fluid my-3">
        <div className="row justify-content-center">
          <div className="col-xl-4 Content-center">
            <div>
              <Lottie animationData={webSiteDesign} loop={true} />
            </div>
          </div>
          <div className="col-xl-6 Content-center">
            <div>
              <h1 className="fw-bold display-5">
                Make Your <span className="color">Future</span> With us
              </h1>

              <p>
                "Are you looking to join a dynamic and innovative IT company?
                Look no further! We are currently seeking talented and motivated
                individuals to join our team.
              </p>
              <p>
                As a member of our team, you will have the opportunity to work
                on cutting-edge technology and collaborate with a diverse group
                of talented individuals. We offer a fast-paced and collaborative
                work environment, as well as the opportunity for career growth
                and development.
              </p>
              <p>
                Our company values creativity, teamwork, and a passion for
                technology. If you share these values and are ready for a
                challenging and rewarding career, we encourage you to apply.
              </p>
              <p>
                We offer competitive compensation and benefits packages, as well
                as a flexible work schedule. So, if you're ready to take your
                career to the next level, join us and be a part of something
                great! Apply today."
              </p>
            </div>
          </div>
          <div className="col-xl-10 shadow-sm rounded py-3 mb-5">
            <h2 className="fw-bold">Contact Form</h2>
            <form onSubmit={joinData} action="https://formspree.io/f/mnqynbel" method="post">
              <div className="row justify-content-center">
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="exampleInputName"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last name"
                      className="form-control"
                      id="exampleInputName"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label htmlFor="exampleInputnumber" className="form-label">
                      Number
                    </label>
                    <input
                      name="number"
                      type="number"
                      className="form-control"
                      id="exampleInputnumber"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Job Profile
                    </label>
                    <input
                      name="job Profile"
                      type="text"
                      className="form-control"
                      id=""
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Experience
                    </label>
                    <input
                      name="Experience"
                      type="text"
                      className="form-control"
                      id=""
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Current CTC
                    </label>
                    <input
                      name="Current CTC"
                      type="text"
                      className="form-control"
                      id=""
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Expectation CTC
                    </label>
                    <input
                      name="Expectation CTC"
                      type="text"
                      className="form-control"
                      id=""
                    />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="form-floating mb-3">
                    <textarea
                      name="Comments"
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                      defaultValue={""}
                    />
                    <label htmlFor="floatingTextarea">Comments</label>
                  </div>
                </div>
                <div className="col-xl-2">
                  <button
                    type="submit"
                    className="btn-style"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Join;
