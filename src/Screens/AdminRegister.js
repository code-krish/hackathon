import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

function AdminRegister() {
    const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3001/users/adminregister", values);
        alert("Admin registered Successfully")
        navigate("/users/adminlogin");
      } catch (error) {
          console.log(error)
        alert("Something went wrong")
      }
    },
  });
  return (
    <div className="container mt-5">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <label>Name</label>
            <input
              type={"text"}
              name="name"
              id="name"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className="col-lg-12">
            <label>Email</label>
            <input
              type={"email"}
              name="email"
              id="email"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.email}
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
            <input
              type={"submit"}
              value="Register"
              className="btn btn-primary btn-sm mt-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdminRegister;
