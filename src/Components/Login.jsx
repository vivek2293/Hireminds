import React from "react";
import Lottie from "lottie-react";
import login from "../Components/Assets/login.json";
import hello from "../Components/Assets/hello.json";
import "./CSS/Login.css"
import axios from "axios";

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
  function handleClick2() {
    window.location.href = "/register"
  }
  return (
    <>
      <div
        className=" container-fluid gradient-form d-flex justify-content-center align-items-center"
        style={{ overflow: "hidden", position: "relative", width: "100%", padding: '0px !important' }}
        id="login1"
      >
        <div
          className="col-6 gradient-custom-2 d-flex justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div className="text-white px-3 py-4 p-md-5 mx-md-4">
            <Lottie animationData={login} />
          </div>
        </div>
        <div className="mb-5 col-6 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column ">
            <div className="text-center">
              <Lottie animationData={hello} id="heelo" />
              <p className="text-glad">Glad to have you back</p>
            </div>
            {/* <h3>Welcome back</h3>
            <p className="my-2">Please enter your details</p> */}
            <input
              type="email"
              className="my-2 p-2"
              style={{ height: "5vh", borderRadius: "6px" }}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Email"
            />
            <input
              type="Password"
              className="my-2 p-2"
              style={{ height: "5vh", borderRadius: "6px" }}
              onChange={(e) => setPassWrod(e.target.value)}
              placeholder="Password"
            />
            <div className="text-center pt-1 mb-3 pb-1">
              <button
                type="button"
                className="btn w-100 gradient-custom-2 mb-1"
                style={{ color: "white", height: "5vh" }}
                onClick={handleClick}
              >
                Login
              </button>
              <a className="text-muted" href="#!">
                Forgot password?
              </a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mx-1">Don't have an account?</p>
              <a className="" style={{textDecoration:'none', color:'#797CCE'}}>Sign Up</a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Login;
