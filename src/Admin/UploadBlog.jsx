import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import SIdemenu from "./SIdemenu";
import axios from "axios";
import SuccessMassage from "./SuccessMassage";
import { useEffect } from "react";

function UploadBlog() {

  // const [file, setFile] = useState();
  // function onchageimghander(e) {
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // }
  // console.log(file);
  // editor
  const editor = useRef(null);
  const [massage, setMassage] = useState("d-none")
  // const history = useNavigate();  // const {image} = file;
  const [blog, setblog] = useState({
    name: "",
    date: "",
    slug: "",
    meta: "",
    metakeyword: "",
    metadiscripation: "",
    blogcategory: "",
    subblogcategory: "",
    content: "",
    image: ""
  });

  const {
    name,
    date,
    slug,
    meta,
    metakeyword,
    metadiscripation,
    blogcategory,
    subblogcategory,
    content,
    image
  } = blog;

  const oninputchange = (e) => {
    setblog({ ...blog, [e.target.name]: e.target.value });
  };
  const onsubmitdata = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/blogs", blog);
    // history("/");
    setblog({
      name: "",
      date: "",
      slug: "",
      meta: "",
      metakeyword: "",
      metadiscripation: "",
      blogcategory: "",
      subblogcategory: "",
      image: "",
      content: "",
    });
    setMassage("")
    setTimeout(() => {
      setMassage("d-none");
    }, 1500);

  };
  const [categoryData, setCategoryData] = useState([])
  const CategoryData = async () => {
    let apiData = await axios.get("http://localhost:3004/Navbar");
    try {
      setCategoryData(apiData.data)
      console.log(apiData.data)
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    CategoryData();
  }, [])
  return (
    <>
      <div className="container-fluid" style={{ zindex: "999px" }}>
        <div className="row justify-content-end">
          <SIdemenu />
          <div className="col-lg-10" style={{height:"100vh",overflowY:"scroll"}}>
            <h4 className="text-center">Blogs</h4>
            <hr />
            <SuccessMassage DisplayNone={massage} />
            <form onSubmit={onsubmitdata}>
              <div className="row mb-3 px-5 py-2">
                {/* <div className="col-md-6 mt-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Blog Category
                  </label>
                  <div className="border rounded">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      name="blogcategory"
                      value={blogcategory}
                      onChange={oninputchange}
                    >
                      <option selected="select Category">select Category</option>
                      {
                        categoryData.map((data) => {
                          return (
                            <option value={data.Subcategory}>{data.category}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mt-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Blog Category
                  </label>
                  <div className="border rounded">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      name="subblogcategory"
                      value={subblogcategory}
                      onChange={oninputchange}
                    >
                      <option selected="">Sub category</option>
                      <option value="Apple">Apple</option>
                      <option value="Mango">Mango</option>
                      <option value="Banana">Banana</option>
                    </select>
                  </div>
                </div> */}
                <div className="col-md-6 mt-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Blog Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="blog title"
                    aria-describedby="emailHelp"
                    name="name"
                    value={name}
                    onChange={oninputchange}
                  />
                </div>
                
                <div className="col-md-6 mt-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Slug Url
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Slug Url"
                    aria-describedby="emailHelp"
                    name="slug"
                    value={slug}
                    onChange={oninputchange}
                  />
                </div>
                <div className="col-md-6 mt-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Meta Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Meta Title"
                    aria-describedby="emailHelp"
                    name="meta"
                    value={meta}
                    onChange={oninputchange}
                  />
                </div>
                <div className="col-md-6 mt-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Enter Metakeyword
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Metakeyword"
                    aria-describedby="emailHelp"
                    name="metakeyword"
                    value={metakeyword}
                    onChange={oninputchange}
                  />
                </div>
                <div className="col-md-6 mt-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Enter Meta Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Meta Description"
                    aria-describedby="emailHelp"
                    name="metadiscripation"
                    value={metadiscripation}
                    onChange={oninputchange}
                  />
                </div>
                <div className="col-md-6 mt-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  name="image"
                  value={image}
                  onChange={oninputchange}
                  />
                </div>
                <div className="mb-3 col-md-12 mt-2">
                  <label htmlFor="">Discription</label>
                  <JoditEditor
                    ref={editor}
                    // name="content"
                    value={content}
                    // setblog={setblog}
                    tabIndex={1} // tabIndex of textarea
                    // onBlur={newContent => setblog(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={content => setblog(content)}

                  />
                </div>
              </div>
              <div className="col-md-6 d-grid gap-2 px-5">
                <button className="btn btn-dark fw-bold">UPLOAD</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadBlog;
