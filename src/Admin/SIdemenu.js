import React from 'react'
import { NavLink } from 'react-router-dom';

function SIdemenu() {
    return (
        <>
            <div className="col-lg-2 d-flex flex-column bg-dark flex-shrink-0 p-3 bg-light" style={{ height: "100vh" }}>
                <h1>                    <span className="fs-4 text-light">WaveMantra</span>
                </h1>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className=''>
                        <NavLink to="/dashboard" className={({isActive})=>`nav-link text-light ${isActive ? "bg-light text-dark" : ""}`} >
                            <i className="bi bi-speedometer2" />{" "}
                            Dashboard
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/UploadBlog" className={({isActive})=>`nav-link text-light ${isActive ? "bg-light text-dark" : ""}`}>
                            <i className="bi bi-plus-circle" />{" "}
                            Upload Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/viewblog" className={({isActive})=>`nav-link text-light ${isActive ? "bg-light text-dark" : ""}`}>
                            <i className="bi bi-grid-fill" />{" "}
                             Blogs
                        </NavLink>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <NavLink
                        to="/"
                        className="d-flex align-items-center text-light  text-decoration-none dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {/* <img
                            src={require("")}
                            alt=""
                            width={32}
                            height={32}
                            className="rounded-circle me-2"
                        /> */}
                        WaveMantra Admin
                    </NavLink>
                    <ul className="dropdown-menu text-small shadow">
                        <li>
                            <NavLink className="dropdown-item" to="/">
                                Settings
                            </NavLink>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <NavLink className="dropdown-item" to="/">
                                logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default SIdemenu