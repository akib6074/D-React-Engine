import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { Input, message } from "antd";
import { TbKey } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slices/Auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const {user,isLoggedIn} = useSelector((state)=>state.auth)
  const dispatch = useDispatch();

  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(()=>{
    let currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser) {
      navigate("/dashboard");
    }else{
      navigate("/login");
    }
  },[user])
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleLogin = (e)=>{
    e.preventDefault();
    const {email,password} = data
    if (email == undefined || email == null || email == "" ||password == undefined || password == null || password == ""  ) {
      message.warning("Please Enter Username and Password")
    }else{
      dispatch(login({email,password}))
    }
  }

  return (
    <div className="mainwrapper">
      <div className="upper-landing-page-image">
        <div className="loginlandingpage"></div>
      </div>

      <div className="login-form-intro row">
        <div className="col-2 col-lg-4 col-sm-12 "></div>
        <div className="col-6 col-lg-4 col-sm-12 text-white text-center ms-5">
          <p className="" style={{ fontWeight: "300", fontSize: "40px" }}>
            APSIS ITSM
          </p>
          <p className="">A holistic solution to IT Management</p>
          <h5>Incident and service management</h5>
        </div>
        <div className="col-4 col-lg-4 col-sm-12"></div>
      </div>

      <div className="login-form  text-white ">
        <div className="row">
          <div className="col-lg-3 col-sm-12"></div>
          <div className="col-lg-8 col-sm-10 ms-2">
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-sm-12 col-10">
                <Input
                  className="signInInput"
                  name="email"
                  onChange={handleChange}
                  placeholder="adminuser@apsissolutions.com"
                  prefix={<MdOutlineEmail />}
                />
              </div>
              <div className="col-lg-3 col-sm-12 col-10 ">
                <Input
                  className="signInInput"
                  name="password"
                  placeholder="Password"
                  prefix={<TbKey />}
                  onChange={handleChange}
                  type="password"
                />
              </div>
              <div className="col-lg-2 col-sm-12 col-10 ">
                <Button className="loginBtn" onClick={handleLogin}>Login</Button>
                <div className="text-white mt-2">
                  <input
                    className="form-check-input  ms-1"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <span className="ms-2">Remember Me</span>
                </div>
              </div>
              <div className="col-lg-2 col-sm-12 col-10 ">
                <Button className="loginBtn">Register</Button>
                <div
                  className="text-white mt-2 ms-2"
                  style={{ fontSize: "16px" }}
                >
                  Forget Password
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-sm-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
