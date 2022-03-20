import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import "../styles.css";
import { useState } from "react";
import { signupService } from "../../../services/signupService";

import { useAuth } from "../../../contexts/authContext";

const SignUp = () => {
  const [signupInput, setSignupInput] = useState({});
  const { setIsAuth, setToken } = useAuth();
  const [hide, setHide] = useState({ pwd: true, confirmPwd: true });
  const [pwdMatch, setPwdMatch] = useState(true);

  const signupInputHandler = (e) => {
    const { name, value } = e.target;
    setSignupInput({ ...signupInput, [name]: value });

    if (name === "confirmPwd") {
      setPwdMatch(() => (value === signupInput.pwd ? true : false));
    }
  };

  const signupHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await signupService(signupInput);

      localStorage.setItem("token", data.encodedToken);
      setToken(data.encodedToken);

      setIsAuth(true);
      setSignupInput({ signupInput: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section login-container">
        <div className="card-wrapper basic-card card-text-only">
          <div>
            <div className="card-heading">Sign Up</div>
          </div>

          <div className="card-content">
            <form className="form-group" onSubmit={signupHandler}>
              <div className="input-group input input-primary">
                <label className="input-label">Email</label>
                <input
                  type="email"
                  placeholder="Type here..."
                  name="email"
                  value={signupInput.email || ""}
                  onChange={signupInputHandler}
                  required
                />
              </div>

              <div className="input-group input input-primary">
                <label className="input-label">FullName</label>
                <input
                  type="text"
                  placeholder="Type here..."
                  name="name"
                  value={signupInput.name || ""}
                  onChange={signupInputHandler}
                  required
                />
              </div>

              <div className="input-group input input-primary">
                <label className="input-label">Password</label>
                <div className="toggle-pwd">
                  <input
                    type={`${hide.pwd ? "password" : "text"}`}
                    placeholder="Type here..."
                    name="pwd"
                    value={signupInput.pwd || ""}
                    onChange={signupInputHandler}
                    required
                  />
                  <i
                    className={`fa-solid ${hide.pwd ? "fa-eye" : "fa-eye-slash"}
                    `}
                    onClick={() => setHide({ ...hide, pwd: !hide.pwd })}
                  ></i>
                </div>
              </div>

              <div className="input-group input input-primary">
                <label className="input-label">Confirm Password</label>
                <div className="toggle-pwd">
                  <input
                    type={`${hide.confirmPwd ? "password" : "text"}`}
                    placeholder="Type here..."
                    name="confirmPwd"
                    value={signupInput.confirmPwd || ""}
                    onChange={signupInputHandler}
                    required
                  />

                  <i
                    className={`fa-solid ${
                      hide.confirmPwd ? "fa-eye" : "fa-eye-slash"
                    }`}
                    onClick={() =>
                      setHide({ ...hide, confirmPwd: !hide.confirmPwd })
                    }
                  ></i>
                </div>
                {!pwdMatch ? (
                  <div className="input-error-msg">Passwords do not match</div>
                ) : null}
              </div>

              {pwdMatch ? (
                <button className="btn btn-primary" type="submit">
                  Create New Account
                </button>
              ) : (
                <button
                  className="btn btn-primary btn-disabled"
                  type="submit"
                  disabled
                >
                  Create New Account
                </button>
              )}
            </form>
          </div>

          <div className="card-action">
            <span>Already have an account? </span>
            <a href="/pages/login.html" className="link">
              Login
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export { SignUp };
