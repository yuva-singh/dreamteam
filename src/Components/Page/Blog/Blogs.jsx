import React, { useEffect, useState } from "react";
import './blog.css';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBlog } from "../../../ReduxToolkit/Slice/Blog/BlogSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Blogs() {
  const dispatch = useDispatch();
  const { blogs, status, error, } = useSelector((state) => state.blog)
  useEffect(() => {
    dispatch(getBlog())
  }, [])
  return (
    <>
      <div className="container-fluid background-color">
        <div className="row">
          <div className="col-xl-12">
            <h1 className="fw-bold text-center display-6 py-3">
              Blo<span className="color">gs</span>
            </h1>
          </div>
        </div>
      </div>
      {/* <div className="container mb-5">
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
        </div> */}
      {/*sub menu*/}
      <div className="container mt-50 mb-5">
        <div className="row">
          {status === "loading" && (
            <>
            {Array.from({ length: 20 }).map((_, index) => (
              <div className="col-lg-4">
              <div className="shadow-sm rounded my-2">
                <Skeleton width={"100%"} height={"200px"} count={1} />
              </div>
            </div>
            ))}
            </>
          )}
          {status === "failed" && (
            <tr>
              <td colSpan={6}>{error}</td>
            </tr>
          )}
          {status === "succeeded" && (
            blogs.blogs.map((data) => {
              const { blogTitle, image, _id, createdAt } = data;
              const newdate = new Date(createdAt);
              // Convert the date to a more readable format "day, month, year"
              const formattedDate = newdate.toLocaleDateString("default", {
                day: "2-digit",
                month: "long",
                year: "numeric"
              });
              return (
                <div className="col-md-4 mt-3" key={_id}>
                  <div className="shadow-sm rounded-3">
                    <Link to={`/BlogSinglePage/${_id}`}>
                      {image ? <img
                        src={image}
                        alt="" className="img-fluid rounded"
                      /> : <img
                        src={require("../../../Image/blog.png")}
                        alt="" className="img-fluid rounded"
                      />}
                    </Link>
                    <div className="p-2">
                      <div className="pt-2 text-secondary fw-bold">
                        last update <i>{formattedDate}</i>
                      </div>
                      <h1 className="fs-4">{blogTitle}</h1>
                      {/* <p className="fw-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
              esse! <Link to={`/BlogSinglePage/${_id}`}>Read More</Link>
            </p> */}
                    </div>
                  </div>
                </div>
              )
            })
          )}
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
