import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Dashboard() {
  const [api, setapi] = useState([]);
  const blogapi = async () => {
    let apidata = await axios.get("http://localhost:3003/blogs")
    try {
      setapi(apidata.data.reverse());
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    blogapi()
  }, [])
  return (
    <>
      <div className="col-lg-10 bg-light border displayfixedright">
        {/* <div class="row">
          <div class="col-md-12 bg-white py-4">
            <h6>infinixSys</h6>
          </div>
      </div> */}
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
                  {api.length}<span className="text-success">+</span>
                </h2>
                <h6>This Month Blogs</h6>
                
              </div>
              <div>
                <i className='bi bi-newspaper fs-2'></i>
              </div>
            </section>
          </div>
         
          {/*  */}
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