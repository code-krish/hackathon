import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    const formik = useFormik({
      initialValues: {
        
        email: "",
        password: "",
      },
      onSubmit: async (values) => {
        try {
         let loginData =  await axios.post("http://localhost:3001/users/login", values);
          
         window.localStorage.setItem("myapptoken", loginData.data.token)
          navigate("/");
        } catch (error) {
          console.log(error)
          alert("Credentials does not match");

        }
      },
    });
  return (
    <div className="container mt-5">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <label>Email</label>
            <input
              type={"email"}
              name="email"
              id="email"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className="col-lg-12">
            <label>Password</label>
            <input
              type={"password"}
              name="password"
              id="password"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="col-lg-12">
            <input type={"submit"} value="Login" className="btn btn-primary btm-sm mt-2 me-3" />
            <p>New user?<Link to={'/users/register'}>Register here</Link></p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;