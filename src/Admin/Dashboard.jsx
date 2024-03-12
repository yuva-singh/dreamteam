import React, { useEffect, useState } from 'react'


function Dashboard() {
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
            <section className="shadow-sm mt-2 bg-white p-3 rounded-4 d-flex justify-content-between">
              <div>
                <h2>
                  121<span className="text-success">+</span>
                </h2>
                <h6>Total Blog</h6>
               
              </div>
              <div>
                <i className='bi bi-file-earmark-post fs-2'></i>
              </div>
            </section>
          </div>
          <div className="col-md-4">
            <section className="shadow-sm bg-white mt-2 p-3 rounded-4 d-flex justify-content-between">
              <div>
              <h2>
                  121<span className="text-success">+</span>
                </h2>
                <h6>This Month Blogs</h6>
                
              </div>
              <div>
                <i className='bi bi-newspaper fs-2'></i>
              </div>
            </section>
          </div>
                    {/*  */}
           <div className="col-md-4">
            <section className="shadow-sm mt-2 bg-white p-3 rounded-4 d-flex justify-content-between">
              <div>
                <h2>
                  121<span className="text-success">+</span>
                </h2>
                <h6>Today Blog</h6>
               
              </div>
              <div>
                <i className='bi bi-file-earmark-post fs-2'></i>
              </div>
            </section>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard