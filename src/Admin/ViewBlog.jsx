import axios from 'axios';
import React, { useEffect } from 'react'
import SIdemenu from './SIdemenu'
import { useDispatch, useSelector, } from 'react-redux';
import { getBlog, deleteBlogs } from '../ReduxToolkit/Slice/Blog/BlogSlice';
import { Link } from 'react-router-dom';

function ViewBlog() {
  const dispatch = useDispatch();
  const { blogs, status, error } = useSelector((state) => state.blog)
  useEffect(() => {
    dispatch(getBlog())
  }, [])
  const deleteBlog = async (deleteBlogId) => {
    const isConfrimed = window.confirm("Are your sure to delete this Blog?")
    if (isConfrimed) {
      dispatch(deleteBlogs(deleteBlogId))
    } else {
    }
  }
  return (
    <div className="container-fluid">
      <div className="row justify-content-end">
        <SIdemenu />
        <div className="col-lg-10 border p-5" style={{ height: "100vh", overflowY: "scroll" }}>
          <h5>Blogs ({blogs.blogs.length})</h5>
          <table className="table">
            <thead>
              <tr className="bg-dark text-white">
                <th scope="col">s.no</th>
                <th scope="col">Thumbnail</th>
                <th scope="col">Blog name</th>
                <th scope="col">date</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {status === "loading" && (
                <tr>
                  <td colSpan={6}>Loading </td>
                </tr>
              )}
              {status === "failed" && (
                <tr>
                  <td colSpan={6}>{error}</td>
                </tr>
              )}
              {status === "succeeded" && (
                blogs.blogs.map((data, index) => {
                  const { blogTitle, image, status, _id, createdAt } = data;
                  const newdate = new Date(createdAt);
                  // Convert the date to a more readable format "day, month, year"
                  const formattedDate = newdate.toLocaleDateString("default", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                  });
                  return (
                    <tr key={_id}>
                      <th scope="row">
                        {index + 1}
                      </th>
                      <td>{image ? <img src={image}
                        width={50}
                        height={50}

                        className='rounded-circle img-fit' alt="" /> : <img src={require('../Image/intranet-icon.svg')} className='img-fluid' alt="" />}</td>
                      <td>{blogTitle}</td>
                      <td>{formattedDate}</td>
                      <td>{status ? "true" : "false"}</td>
                      <td>
                        <Link to={`/editblog/${_id}`}><i className='bi bi-pencil-square fs-4'></i></Link>
                        <i className='bi bi-archive-fill text-danger fs-4 mx-1' onClick={() => deleteBlog(_id)} style={{ cursor: "pointer" }}></i>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default ViewBlog