import React from "react";
import "./CSS/Signup.css"
import axios from "axios";
import Lottie from "lottie-react";
import Signup from "./Assets/signup1.json";

function RegisterPage2() {

  // Made states for all the entries in the form

  const [userEmail, setUserEmail] = React.useState();
  const [passWord, setPassWrod] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();
  const [institute, setInstitute] = React.useState();

  function handleClick() {
    // if(passWord === confirmPassword)
    // {
    //     axios.post(host + "/auth/create", {
    //         email: userEmail,
    //         password: passWord,
    //         confirmPassword: confirmPassword,
    //     },{withCredentials : true}).then((res)=>{
    //         window.alert("success")
    //     }).catch((err)=>{
    //         window.alert(err);
    //     })
    // }
    // else{
    //     window.alert("Password and Confirm Password does not match")
    // }

  }

  // It returns the structure of this particular page

  return (
    <>
      <div
        className=" container-fluid gradient-form d-flex justify-content-center align-items-center"
        style={{ overflow: "hidden", position: "relative", width: "100%" }}
        id="login1"
      >
        <div className="col-6 mb-5 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column ms-5">

            <center className="my-3 main-head"><h4>Create your account</h4></center>

            <div className="my-1">Institue Name:</div>
            <input
              type="email"
              className="mb-1 p-2"
              style={{ height: "5vh", borderRadius: "6px" }}
              onChange={(e) => setInstitute(e.target.value)}
              required
            />
            <div className="my-1">Email:</div>
            <input
              type="email"
              className="mb-1 p-2"
              style={{ height: "5vh", borderRadius: "6px" }}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
            <div className="my-1">Password:</div>
            <input
              type="Password"
              className="mb-1 p-2"
              style={{ height: "5vh", borderRadius: "6px" }}
              onChange={(e) => setPassWrod(e.target.value)}
              required
            />
            <div className="my-1">Confirm Password:</div>
            <input
              type="Password"
              className="mb-1 p-2"
              style={{ height: "5vh", borderRadius: "6px" }}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div className="text-center pt-1 my-2 pb-1">
              <button
                type="button"
                className="btn w-100 gradient-custom-2"
                style={{
                  color: "white",
                  height: "5vh"
                }}
                onClick={handleClick}
              >
                Create Account
              </button>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 my-3">
              <p className="">Already have an account?</p>
              <p className="mx-2 login-link" style={{ textDecoration: 'none', color: '#797CCE' }} onClick={window.location.href = "/login"}>Login</p>
            </div>
          </div>
        </div>

        <div
          className="col-6 gradient-custom-21 d-flex justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div className="text-white px-3 py-4 p-md-5 mx-md-4">
            <Lottie animationData={Signup} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage2;
