import React, { useEffect, useState } from 'react'
import { getBlog } from '../ReduxToolkit/Slice/Blog/BlogSlice';
import { useDispatch, useSelector, } from 'react-redux';

function Dashboard() {
  const dispatch = useDispatch();
  const { blogs, status, error } = useSelector((state) => state.blog)
  console.log(blogs.blogs)
  useEffect(() => {
    dispatch(getBlog())
  }, [])

  return (
    <>
      <div className="col-lg-10 bg-light border displayfixedright">
        <div className="row px-5 py-2">
          <div className="col-md-12 mb-2 d-flex justify-content-between">
            <div>
              <h2>Dashboard</h2>
              <p>Welcome to our Dashboard</p>
            </div>
          </div>
           {/*  */}
           <div className="col-md-4">
            <section className="shadow mt-2 background-color p-3 rounded-4 d-flex justify-content-between">
              <div>
                <h2>
                {blogs.totalBlogs}<span className="text-success">+</span>
                </h2>
                <h6>Total Blog</h6>
               
              </div>
              <div>
                <i className='bi bi-grid fs-2'></i>
              </div>
            </section>
          </div>
          <div className="col-md-4">
            <section className="shadow background-color mt-2 p-3 rounded-4 d-flex justify-content-between">
              <div>
              <h2>
                  {blogs.blogsThisMonth}<span className="text-success">+</span>
                </h2>
                <h6>This Month Blogs</h6>
                
              </div>
              <div>
                <i className='bi bi-grid fs-2'></i>
              </div>
            </section>
          </div>
                    {/*  */}
           <div className="col-md-4">
            <section className="shadow mt-2 background-color p-3 rounded-4 d-flex justify-content-between">
              <div>
                <h2>
                {blogs.blogsToday}<span className="text-success">+</span>
                </h2>
                <h6>Today Blog</h6>
               
              </div>
              <div>
                <i className='bi bi-grid fs-2'></i>
              </div>
            </section>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard