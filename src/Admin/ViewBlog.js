import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SIdemenu from './SIdemenu'

function ViewBlog() {
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
  const deleteuser = async(id)=>{
    await axios.delete(`http://localhost:3003/blogs/${id}`);
     blogapi()
  }
  return (
    <div className="container-fluid">
      <div className="row justify-content-end">
        <SIdemenu />
        <div className="col-lg-10 border p-5" style={{height:"100vh",overflowY:"scroll"}}>
          <h5 className="text-center">View Blog</h5>
          <hr />
          <table className="table">
            <thead>
              <tr className="bg-dark text-white">
                <th scope="col">s.no</th>
                <th scope="col">Blog name</th>
                <th scope="col">date</th>
                <th scope="col">slug Url</th>
                <th scope="col">meta Tag</th>
                <th scope="col">metakeyword</th>
                <th scope="col">metadiscripation</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {api.map((data, index) => {
                const { name, date, slug, meta, metakeyword, metadiscripation, id } = data;
                return (
                  <tr key={id}>
                    <th scope="row" className="table-secondary">
                      {index + 1}
                    </th>
                    <td className="table-info">{name}</td>
                    <td className="table-success">{date}</td>
                    <td className="table-warning">{slug}</td>
                    <td className="table-info">{meta}</td>
                    <td className="table-success">{metakeyword}</td>
                    <td className="table-warning">{metadiscripation}</td>
                    <td className='table-danger'>
                      <i className='bi bi-archive text-danger' onClick={()=>deleteuser(id)} style={{cursor:"pointer"}}></i>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default ViewBlog