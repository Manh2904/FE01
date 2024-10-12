import React, { useState } from "react";
// import { userRegister } from "../sevies/user";
// import { UserRegister } from "../interface/user";
import Header from "./header";
import Footer from "./footer";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {

  
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-8">
            <img src="https://pubcdn.ivymoda.com/files/news/2023/05/16/4c9b7ece1675eff8c459dd08d06baae4.jpg" alt="" width={"100%"} />
          </div>
          <div className="col-4 d-flex align-items-center my-4">
            <div className="login">
              <div className="tile">
                <h2 className="my-4">Đăng Ký vào Exclusive</h2>
                <span>Enter your details below</span>
              </div>
              <form className="form">
                <div className="email my-3">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom"
                    name=""
                    placeholder="Full Name"
                    style={{ width: "350px" }}
                  />
                </div>
                <div className="email my-3">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom"
                    name=""
                   
                    placeholder="Email or Phone Number"
                    style={{ width: "350px" }}
                  />
                </div>
                <div className="pass my-2">
                  <input
                    type="password"
                    className="form-control border-0 border-bottom"
                    name=""
                    id="password"
                    
                    placeholder="Password"
                    style={{ width: "350px" }}
                  />
                </div>
                <div className="row my-3">
                  <div className="col-6">
                    <button type="submit" className="btn btn-danger">
                      Register
                    </button>
                  </div>
                  <div className="col-6">
                    <a className="btn text-danger " href="/login">
                      Login
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Register;
