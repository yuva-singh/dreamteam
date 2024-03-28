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
  console.log(blogs.blogs.data)
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
      <div className="container mt-50 mb-5">
        <div className="row">
          {status === "loading" && (
            <>
             <tr>
             <Skeleton width={"100%"} height={"200px"} count={10} />
             </tr>
            </>
          )}
          {status === "failed" && (
            <tr>
              <td colSpan={6}>{error}</td>
            </tr>
          )}
          {status === "succeeded" && blogs.blogs.data && (
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
     
    </>
  );
}

export default Blogs;
