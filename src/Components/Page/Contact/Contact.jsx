import React from "react";
import Lottie from "lottie-react";
import contact from "../../../Animation/Contact-2.json";
import { useNavigate } from "react-router-dom";


function Contact() {
  const navigate = useNavigate();
  const submitData = () => {
    setTimeout(() => {
      // navigate("/");
      window.reload();
    }, 2000);
  };
  return (
<>
      <div className="container-fluid background-color">
        <div className="row">
          <div className="col-xl-12 py-3">
            <h1 className="fw-bold text-center AppDevelopment display-6">
              Contact <span className="color">Us</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5">
        <div className="row justify-content-center my-5">
          <div className="col-xl-5 Content-center footer-color rounded">
            <div>
              <Lottie animationData={contact} loop={true} />
            </div>
          </div>
          <div className="col-xl-5">
            <h2 className="fw-bold py-3 display-5">Feel free to contact us or just say hi!</h2>
            <form onSubmit={submitData} action="" method="post">
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
              <div className="mb-3">
                <label htmlFor="exampleInputnumber" className="form-label">
                  Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleInputnumber"
                  minLength={10}
                  maxLength={10}
                />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="" className="form-label">
                Reason to Contact
                </label>
                <input
                  name="Reason to Contact"
                  type="text"
                  className="form-control"
                  id=""
                />
              </div> */}
              <div className="form-floating mb-3">
                <textarea
                  name="Comments"
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  defaultValue={""}
                />
                <label htmlFor="floatingTextarea"> Reason to Contact</label>
              </div>

              <button type="submit" className="btn-style">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="row justify-content-center my-5">
          <div className="col-xl-4 my-2">
            <div className="p-4 text-center shadow-sm rounded">
              <i className="bi bi-telephone-fill  fs-2"></i>
              <div>
                <a href="tel:+919319314403">(+91) 8700282172</a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 my-2">
            <div className="p-4 text-center shadow-sm rounded">
              <i className="bi bi-envelope-fill  fs-2"></i>
              <div>
                <a href="mailto:info@WaveMantra.com">
                  info@WaveMantra.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 my-2">
            <div className="p-4 text-center shadow-sm rounded">
              <i className="bi bi-geo-alt-fill  fs-2"></i>
              <div>
                <a href="#">Dwarka, New Delhi, 110043</a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row my-5 justify-content-center">
          <div className="col-xl-11 px-4 py-5 background-newsletter rounded">
            <h2 className="text-center fw-bold">Subscribe Our Newsletter For Latest Update </h2>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control newsletter"
                placeholder="write your Email"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text newsletter-button" id="basic-addon2">
                Subscribe
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Contact;
