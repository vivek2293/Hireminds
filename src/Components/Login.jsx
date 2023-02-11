import React from "react";
// import "../Styles/LoginPage2.css";
import "./CSS/Login.css"
// import Logo3 from "../Logo3.png";
import axios from "axios";
// import host from "../host";
function Login() {
  const [userName, setUserName] = React.useState();
  const [passWord, setPassWrod] = React.useState();

  function handleClick() {
    // console.log(passWord);
    // console.log(userName);
    // const user = localStorage.getItem("user");
    // console.log(user);
    // console.log(!user);
    // axios
    //   .post(
    //     host + "/auth/login",
    //     {
    //       clubname: userName,
    //       password: passWord,
    //     },
    //     { withCredentials: true }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     window.alert(res);
    //     if (typeof res.data.token !== "undefined")
    //       localStorage.setItem("user", res.data.token);

    //     window.location.href = "/page1";
    //   })
    //   .catch((err) => {
    //     window.alert(err);
    //   });
  }
  function handleClick2(){
    window.location.href = "/register"
  }
  return (
    <>
      <div
        className=" container-fluid gradient-form d-flex justify-content-center align-items-center"
        style={{ overflow: "hidden", position: "relative", width: "100%", padding : '0px !important'}}
        id="login1"
      >
        <div className="mb-5 col-6 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              {/* <img
                src={Logo3}
                style={{ width: "120px" }}
                alt="logo"
                className="mb-2"
              /> */}
              <h4 className="mt-1 mb-5 pb-1">We are The Team Byte Bandits</h4>
            </div>

            <p>Please login to your account</p>
            <div className="my-1">Username:</div>
            <input
              type="text"
              className="my-2 p-2"
              style={{ height: "5vh", borderRadius: "10px" }}
              onChange={(e) => setUserName(e.target.value)}
            />
            <div className="my-1">Password:</div>
            <input
              type="Password"
              className="my-2 p-2"
              style={{ height: "5vh", borderRadius: "10px" }}
              onChange={(e) => setPassWrod(e.target.value)}
            />
            <div className="text-center pt-1 mb-5 pb-1">
              <button
                type="button"
                className="btn w-100 gradient-custom-2"
                style={{ color: "white" }}
                onClick={handleClick}
              >
                Sign in
              </button>
              <a className="text-muted" href="#!">
                Forgot password?
              </a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <button type="button" className="btn btn-danger mx-3" onClick={handleClick2}>
                Create one
              </button>
            </div>
          </div>
        </div>

        <div
          className="col-6 gradient-custom-2 d-flex justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div className="text-white px-3 py-4 p-md-5 mx-md-4">
            <h4 className="mb-4">
              We are more than just a Team, We have Bibek sir
            </h4>
            <p className="small mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center" style={{height: '100vh', width: '100vw'}} id="login2">
          <div className="d-flex justify-content-center align-items-center p-2" style={{flexDirection: 'column', border: '1px solid black', boxShadow:'5px 5px 5px 5px'}}>
            <div className="text-center">
              {/* <img
                src={Logo3}
                style={{ width: "120px" }}
                alt="logo"
                className="mb-2"
              /> */}
              <h4 className="mt-1 mb-5 pb-1">We are The Team Byte Bandits</h4>
            </div>

            <p>Please login to your account</p>
            <div className="my-1">Username:</div>
            <input
              type="text"
              className="my-2 p-2"
              style={{ height: "5vh", borderRadius: "10px" }}
            />
            <div className="my-1">Password:</div>
            <input
              type="Password"
              className="my-2 p-2"
              style={{ height: "5vh", borderRadius: "10px" }}
            />
            <div className="text-center pt-1 mb-5 pb-1">
              <button
                type="button"
                className="btn w-100 gradient-custom-2"
                style={{ color: "white" }}
              >
                Sign in
              </button>
              <a className="text-muted" href="#!">
                Forgot password?
              </a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <button type="button" className="btn btn-danger mx-3" onClick={handleClick2}>
                Create one
              </button>
            </div>
          </div>
      </div>
    </>
  );
}

export default Login;
