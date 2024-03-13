import React,{useEffect} from "react";
import {getsingleBlog} from '../../../ReduxToolkit/Slice/Blog/BlogSlice';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
function BlogSinglePage() {
  const { singleBlogs, status } = useSelector(state => state.blog)
  const newdate = new Date(singleBlogs.createdAt);
  // Convert the date to a more readable format "day, month, year"
  const formattedDate = newdate.toLocaleDateString("default", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
  const { id } = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getsingleBlog(id))
  }, [id])
  return (
    <>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-md-9">
          <h1>{singleBlogs.blogTitle ? singleBlogs.blogTitle :"Blogs" }</h1>  
                    <div className="">
              <div>
                {singleBlogs.image ? <img
                  src={singleBlogs.image}
                  className="img-fluid rounded"
                  alt=""
                /> : <img
                src={require("../../../Image/blog.png")}
                className="img-fluid rounded"
                alt=""
              /> }
                
              </div>
              <div className="p-3">
                <h1>{singleBlogs.blogTitle ? singleBlogs.blogTitle :"Blogs" }</h1>
                {/* <p className="allcolorsame fw-blod">
                  <b>Author : Amit kumar</b>
                </p> */}
                <p>
                  <i className="text-secondary">{formattedDate} last update</i>
                </p>
                 <div dangerouslySetInnerHTML={{ __html: singleBlogs.description}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSinglePage;
