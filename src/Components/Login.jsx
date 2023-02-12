import React from "react";
import Lottie from "lottie-react";
import login from "../Components/Assets/login.json";
import hello from "../Components/Assets/hello.json";
import "./CSS/Login.css"
import axios from "axios";
import host from "../host"

function Login() {

  // Made the states for password, userEmail in the form 

  const [userEmail, setUserEmail] = React.useState();
  const [passWord, setPassWord] = React.useState();

  // This function is triggered when login button is clicked, basically this function posts the data entered in the login form to the dedicated route, in response of posting of data backend sends/responds with a token which is then checked if and if token is found to be valid then only user is taken to further pages of the website otherwise is immediately logged out. 

  function handleClick() {
    // console.log(passWord);
    // console.log(userEmail);
    // const user = localStorage.getItem("user");
    // console.log(user);
    // console.log(!user);
    axios.post(
      host + "/auth/login",
      {
        email: userEmail,
        password: passWord,
      },
      { withCredentials: true }
    )
      .then((res) => {
        console.log(res);
        if (typeof res.data.token !== "undefined")
          localStorage.setItem("user", res.data.token);

        window.location.href = "/dashboard";
      })
      .catch((err) => {
        window.alert(err);
      });
  }

  function handleClick2() {
    window.location.href = "/register"
  }

  // It returns the structure of this particular page

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
            <input
              type="email"
              className="mt-4 p-2 mb-2"
              style={{ height: "5vh", borderRadius: "6px" }}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="Password"
              className="my-2 p-2"
              style={{ height: "5vh", borderRadius: "6px" }}
              onChange={(e) => setPassWord(e.target.value)}
              placeholder="Password"
              required
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
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mx-1">Don't have an account?</p>
              <p className="signup-link" style={{ textDecoration: 'none', color: '#797CCE' }} onClick={() => window.location.href = "/register"}>Sign Up</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Login;
