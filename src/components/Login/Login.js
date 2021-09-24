import React, { useRef, useState, useContext } from "react";
import ItemContext from "../../context/ItemContext";
import "./Login.scss";

const Login = () => {
  const context = useContext(ItemContext);
  const {
    errorMsg,
    setErrorMsg,
    newSignup,
    errorCondition,
    setErrorCondition,
    login,
  } = context;

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    eid: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const signup = (e) => {
    e.preventDefault();
    if (userData.password === userData.confirmPassword) {
      newSignup(
        userData.firstname,
        userData.lastname,
        userData.eid,
        userData.mobile,
        userData.password
      );
    } else setErrorMsg("Password should match");
  };

  const [loginData, setLoginData] = useState({
    eid: "",
    password: "",
  });

  const checkLogin = (e) => {
    e.preventDefault();
    if (loginData.eid !== "" && loginData.password !== "")
      login(loginData.eid, loginData.password);
    else setErrorCondition(true);
  };

  const login_ref = useRef(null);
  const register_ref = useRef(null);
  const btn_ref = useRef(null);
  const container_ref = useRef(null);

  const styleRegister = () => {
    login_ref.current.style.left = "-100%";
    register_ref.current.style.left = "0";
    btn_ref.current.style.left = "110px";
    container_ref.current.style.height = "750px";
  };

  const styleLogin = () => {
    login_ref.current.style.left = "0";
    register_ref.current.style.left = "100%";
    btn_ref.current.style.left = "0";
    container_ref.current.style.height = "440px";
  };

  return (
    <div className="login-container" ref={container_ref}>
      <div className="toggle-container">
        <div className="button-box">
          <div id="btn" ref={btn_ref}></div>
          <button type="button" className="toggle-btn" onClick={styleLogin}>
            &nbsp;Log In
          </button>
          <button type="button" className="toggle-btn" onClick={styleRegister}>
            &nbsp;Register
          </button>
        </div>
      </div>

      <form action="" className="content login" ref={login_ref}>
        <h1>LOGIN</h1>
        <div className="input-con">
          <input
            type="text"
            value={loginData.eid}
            onChange={(e) => {
              setLoginData((preState) => ({
                ...preState,
                eid: e.target.value,
              }));
              setErrorCondition(false);
            }}
            required
          />
          <span>Email id</span>
        </div>
        <div className="input-con">
          <input
            type="text"
            value={loginData.password}
            onChange={(e) => {
              setLoginData((preState) => ({
                ...preState,
                password: e.target.value,
              }));
              setErrorCondition(false);
            }}
            required
          />
          <span>Password</span>
        </div>
        <div style={{ height: "10px" }}>
          {errorCondition && <p className="errorMsg">Invalid credentials</p>}
        </div>
        <div className="input-con">
          <button onClick={checkLogin}>Login</button>
        </div>
      </form>

      <form action="" className="content register" ref={register_ref}>
        <h1>REGISTER</h1>

        <div className="input-con">
          <input
            type="text"
            value={userData.firstname}
            onChange={(e) => {
              setUserData((preState) => ({
                ...preState,
                firstname: e.target.value,
              }));
              setErrorMsg("");
            }}
            required
          />
          <span>First name</span>
        </div>

        <div className="input-con">
          <input
            type="text"
            value={userData.lastname}
            onChange={(e) => {
              setUserData((preState) => ({
                ...preState,
                lastname: e.target.value,
              }));
              setErrorMsg("");
            }}
            required
          />
          <span>Last name</span>
        </div>

        <div className="input-con">
          <input
            type="text"
            value={userData.eid}
            onChange={(e) => {
              setUserData((preState) => ({
                ...preState,
                eid: e.target.value,
              }));
              setErrorMsg("");
            }}
            required
          />
          <span>Email id</span>
        </div>

        <div className="input-con">
          <input
            type="text"
            value={userData.mobile}
            onChange={(e) => {
              setUserData((preState) => ({
                ...preState,
                mobile: e.target.value,
              }));
              setErrorMsg("");
            }}
            required
          />
          <span>Mobile number</span>
        </div>

        <div className="input-con">
          <input
            type="text"
            value={userData.password}
            onChange={(e) => {
              setUserData((preState) => ({
                ...preState,
                password: e.target.value,
              }));
              setErrorMsg("");
            }}
            required
          />
          <span>Enter password</span>
        </div>

        <div className="input-con">
          <input
            type="text"
            value={userData.confirmPassword}
            onChange={(e) => {
              setUserData((preState) => ({
                ...preState,
                confirmPassword: e.target.value,
              }));
              setErrorMsg("");
            }}
            required
          />
          <span>Confirm password</span>
        </div>

        <div style={{ height: "10px" }}>
          {errorMsg !== "" && <p className="errorMsg">{errorMsg}</p>}
        </div>

        <div className="input-con">
          <button onClick={signup}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
