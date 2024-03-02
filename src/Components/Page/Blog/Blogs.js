import React, { useState } from "react";
import './blog.css';
import { Link } from "react-router-dom";

let Blog = [
  {
    Heading: "Wedding",
    praghraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque eaque dolor in vel...",
    date: "07-04-2022",
    author: "Author: Amit kushwaha",
    // Img: `.${Wedding}`,
  },
  {
    Heading: "Mehandi",
    praghraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque eaque dolor in vel...",
    date: "07-04-2022",
    author: "Author : Rukesh Kumar",
    // Img: `.${mehendi}`,
  },
  {
    Heading: "Ring ceremony",
    praghraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque eaque dolor in..",
    date: "07-04-2022",
    author: "Author:Yuva singh",
    // Img: `.${ringceremony}`,
  },
  {
    Heading: "Haldi",
    praghraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque eaque dolor in vel perspiciatis..",
    date: "07-04-2022",
    author: "Author : Sachin Kumar",
    // Img: `.${haldi}`,
  },
  {
    Heading: "Dance",
    praghraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque eaque dolor in..",
    date: "07-04-2022",
    author: "Author: Parth",
    // Img: `.${dance}`,
  },
  {
    Heading: "Catering",
    praghraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque eaque dolor..",
    date: "07-04-2022",
    author: "Author : Unknown",
    // Img: `.${catering}`,
  },
];
let newBlog = [
  {
    Heading: "Catering",
    praghraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque eaque dolor..",
    date: "07-04-2022",
    author: "Author : Unknown",
    // Img: `.${catering}`,
  },
];

function Blogs() {
  return (
     <>
        <div className="container mb-5">
          <div className="row justify-content-between py-3">
            {newBlog.map((data) => {
              return (
                <div className="col-md-8" key={data.id}>
                  <div className=" shadow-sm rounded">
                    <Link to="/BlogSinglePage">
                      <img
                        src={require("../../../Image/blog.png")}
                        className="img-fluid rounded"
                        alt=""
                      />
                    </Link>
                    <div className="px-3 py-1">
                      <div className="pt-2 text-secondary fw-bold">
                        last update <i>{data.date}</i>
                      </div>
                      <h1 className="fs-2">
                        <strong>{data.Heading}</strong>
                      </h1>
                      {/* <p className="fs-5">
                        {praghraph.slice(0, 100)}{" "}
                        <Link to="/blogDetails">Read More</Link>
                      </p> */}
                    </div>
                  </div>
                </div>
              )
            })}
            <div className="col-md-4">
              <div className="row shadow-sm rounded mt-2 pt-3">
                <div className="col-md-4">
                  <Link to="/blogDetails">
                    <img
                      src={require("../../../Image/blog.png")}
                      className="img-fluid rounded"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="col-md-8">
                  <h1 className="fs-6">
                    <strong>Benifits of eating fruits</strong>
                  </h1>
                  <p className="fs-6">
                    Lorem ipsum dolor sit amet this is amit kumar singh{" "}
                    <Link to="/blogDetails">Read More</Link>
                  </p>
                </div>
              </div>
              <div className="row shadow-sm rounded mt-2 pt-3">
                <div className="col-md-4">
                  <Link to="/blogDetails">
                    <img
                      src={require("../../../Image/blog.png")}
                      className="img-fluid rounded"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="col-md-8">
                  <h1 className="fs-6">
                    <strong>Benifits of eating fruits</strong>
                  </h1>
                  <p className="fs-6">
                    Lorem ipsum dolor sit amet this is amit kumar singh{" "}
                    <Link to="/blogDetails">Read More</Link>
                  </p>
                </div>
              </div>
              <div className="row shadow-sm rounded mt-2 pt-3">
                <div className="col-md-4">
                  <Link to="/blogDetails">
                    <img
                      src={require("../../../Image/blog.png")}
                      className="img-fluid rounded"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="col-md-8">
                  <h1 className="fs-6">
                    <strong>Benifits of eating fruits</strong>
                  </h1>
                  <p className="fs-6">
                    Lorem ipsum dolor sit amet this is amit kumar singh{" "}
                    <Link to="/blogDetails">Read More</Link>
                  </p>
                </div>
              </div>
              <div className="row shadow-sm rounded mt-2 pt-3">
                <div className="col-md-4">
                  <Link to="/blogDetails">
                    <img
                      src={require("../../../Image/blog.png")}
                      className="img-fluid rounded"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="col-md-8">
                  <h1 className="fs-6">
                    <strong>Benifits of eating fruits</strong>
                  </h1>
                  <p className="fs-6">
                    Lorem ipsum dolor sit amet this is amit kumar singh{" "}
                    <Link to="/blogDetails">Read More</Link>
                  </p>
                </div>
              </div>
              <div className="row shadow-sm rounded mt-2 pt-3">
                <div className="col-md-4">
                  <Link to="/blogDetails">
                    <img
                      src={require("../../../Image/blog.png")}
                      className="img-fluid rounded"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="col-md-8">
                  <h1 className="fs-6">
                    <strong>Benifits of eating fruits</strong>
                  </h1>
                  <p className="fs-6">
                    Lorem ipsum dolor sit amet this is amit kumar singh{" "}
                    <Link to="/blogDetails">Read More</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*sub menu*/}
        <div className="container mt-50 mb-5">
          <div className="row">
            {Blog.map((index) => {
              const { name, date, id } = index;
              return (
                <div className="col-md-4 mt-3" key={id}>
                  <div className="shadow-sm rounded-3">
                    <Link to="/">
                      <img
                        src={require("../../../Image/blog.png")}
                        alt="" className="img-fluid rounded"
                      />
                    </Link>
                    <div className="p-2">
                      <div className="pt-2 text-secondary fw-bold">
                        last update <i>{date}</i>
                      </div>
                      {/* <h1 className="fs-4">{praghraph}</h1> */}
                      <p className="fw-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
                        esse! <Link to="/">Read More</Link>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/*readmore buttom*/}
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <button className="btn-style">
                <Link to="#" className="">
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </>
  );
}

export default Blogs;
