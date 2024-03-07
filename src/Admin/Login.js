import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const emailchange = (event) => {
    setemail(event.target.value);
  };
  const passwordchange = (event) => {
    setpassword(event.target.value);
  };
  let formdata = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };
     
    if (email == "ak7280032@gmail.com" && password == 8700282172) {
      history("/dashboard");
    } else {
      console.log("wrong password");
    }
    setemail("");
    setpassword("");
  };
  return (
    <div className="container-fluid login">
      <div className="row justify-content-center">
        <div className="col-md-4 margin">
          <main className="form-signin">
            <form onSubmit={formdata}>
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={emailchange}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating py-2">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={passwordchange}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" defaultValue="remember-me" /> Remember
                  me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-dark" type="submit">
                Sign in
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
