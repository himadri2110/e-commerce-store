import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import "../styles.css";
import { useState } from "react";
import { signupService } from "../../../services/authServices";
import { Loader } from "../../../components/Loader/Loader";
import { toast } from "react-hot-toast";
import { useAuth } from "../../../contexts/authContext";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { setIsAuth, setToken, navigate } = useAuth();

  const [signup, setSignup] = useState({
    input: {},
    error: "",
    pwdMatch: true,
    hide: { pwd: true, confirmPwd: true },
  });

  const [loading, setLoading] = useState(false);

  const signupInputHandler = (e) => {
    const { name, value } = e.target;

    if (name === "confirmPwd") {
      setSignup({
        ...signup,
        input: { ...signup.input, [name]: value },
        pwdMatch: value === signup.input.password ? true : false,
      });
    } else {
      setSignup({ ...signup, input: { ...signup.input, [name]: value } });
    }
  };

  const signupHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await signupService(signup.input);
      setLoading(false);

      toast.success(`Hi, ${data.createdUser.firstName}!`, {
        icon: "👋",
      });

      localStorage.setItem("isAuth", true);
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.createdUser));

      setToken(data.encodedToken);

      setIsAuth(true);

      navigate("/");
    } catch (err) {
      setLoading(false);
      toast.error("There was an error signing you up");
      setSignup({ ...signup, error: err.response.data.errors[0] });
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section login-container">
        {loading ? (
          <Loader />
        ) : (
          <div className="card-wrapper basic-card card-text-only">
            <div className="text-center text-danger">{signup.error}</div>

            <div>
              <div className="card-heading">Sign Up</div>
            </div>

            <div className="card-content">
              <form className="form-group" onSubmit={signupHandler}>
                <div className="input-group input input-primary">
                  <label className="input-label">
                    FirstName<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here..."
                    name="firstName"
                    value={signup.input.firstName || ""}
                    onChange={signupInputHandler}
                    required
                  />
                </div>

                <div className="input-group input input-primary">
                  <label className="input-label">
                    LastName<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here..."
                    name="lastName"
                    value={signup.input.lastName || ""}
                    onChange={signupInputHandler}
                    required
                  />
                </div>

                <div className="input-group input input-primary">
                  <label className="input-label">
                    Email<span>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Type here..."
                    name="email"
                    value={signup.input.email || ""}
                    onChange={signupInputHandler}
                    required
                  />
                </div>

                <div className="input-group input input-primary">
                  <label className="input-label">
                    Password<span>*</span>
                  </label>
                  <div className="toggle-pwd">
                    <input
                      type={`${signup.hide.pwd ? "password" : "text"}`}
                      placeholder="Type here..."
                      name="password"
                      value={signup.input.password || ""}
                      onChange={signupInputHandler}
                      required
                    />
                    <i
                      className={`fa-solid ${
                        signup.hide.pwd ? "fa-eye" : "fa-eye-slash"
                      }
                    `}
                      onClick={() =>
                        setSignup({
                          ...signup,
                          hide: { ...signup.hide, pwd: !signup.hide.pwd },
                        })
                      }
                    ></i>
                  </div>
                </div>

                <div className="input-group input input-primary">
                  <label className="input-label">
                    Confirm Password<span>*</span>
                  </label>
                  <div className="toggle-pwd">
                    <input
                      type={`${signup.hide.confirmPwd ? "password" : "text"}`}
                      placeholder="Type here..."
                      name="confirmPwd"
                      value={signup.input.confirmPwd || ""}
                      onChange={signupInputHandler}
                      required
                    />

                    <i
                      className={`fa-solid ${
                        signup.hide.confirmPwd ? "fa-eye" : "fa-eye-slash"
                      }`}
                      onClick={() =>
                        setSignup({
                          ...signup,
                          hide: {
                            ...signup.hide,
                            confirmPwd: !signup.hide.confirmPwd,
                          },
                        })
                      }
                    ></i>
                  </div>
                  {!signup.pwdMatch ? (
                    <div className="input-error-msg">
                      Passwords do not match
                    </div>
                  ) : null}
                </div>

                {signup.pwdMatch ? (
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
              <Link to="/login" className="link">
                Login
              </Link>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export { SignUp };
