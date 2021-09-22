import React, { useRef } from "react";
import "./Login.scss";

const Login = () => {
  const login_ref = useRef(null);
  const register_ref = useRef(null);
  const btn_ref = useRef(null);
  const container_ref = useRef(null);

  const register = () => {
    login_ref.current.style.left = "-100%";
    register_ref.current.style.left = "0";
    btn_ref.current.style.left = "110px";
    container_ref.current.style.height = "750px";
  };

  const login = () => {
    login_ref.current.style.left = "0";
    register_ref.current.style.left = "100%";
    btn_ref.current.style.left = "0";
    container_ref.current.style.height = "440px";
  };

  const signup = () => {};

  return (
    <div className="login-container" ref={container_ref}>
      <div className="toggle-container">
        <div className="button-box">
          <div id="btn" ref={btn_ref}></div>
          <button type="button" className="toggle-btn" onClick={login}>
            &nbsp;Log In
          </button>
          <button type="button" className="toggle-btn" onClick={register}>
            &nbsp;Register
          </button>
        </div>
      </div>

      <form action="" className="content login" ref={login_ref}>
        <h1>LOGIN</h1>

        <div className="input-con">
          <input type="text" required />
          <span>Email id</span>
        </div>

        <div className="input-con">
          <input type="text" required />
          <span>Password</span>
        </div>

        <div className="input-con">
          <button>Login</button>
        </div>
      </form>

      <form action="" className="content register" ref={register_ref}>
        <h1>REGISTER</h1>

        <div className="input-con">
          <input type="text" required />
          <span>First name</span>
        </div>

        <div className="input-con">
          <input type="text" required />
          <span>Last name</span>
        </div>

        <div className="input-con">
          <input type="text" required />
          <span>Email id</span>
        </div>

        <div className="input-con">
          <input type="text" required />
          <span>Mobile number</span>
        </div>

        <div className="input-con">
          <input type="text" required />
          <span>Enter password</span>
        </div>

        <div className="input-con">
          <input type="text" required />
          <span>Confirm password</span>
        </div>

        <div className="input-con">
          <button onClick={signup}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
