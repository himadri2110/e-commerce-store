import { useState } from "react";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import "../styles.css";
import { useAuth } from "../../../contexts/authContext";
import { loginService } from "../../../services/authServices";
import { Link } from "react-router-dom";
import { Loader } from "../../../components/Loader/Loader";
import { toast } from "react-hot-toast";

const Login = () => {
  const { setIsAuth, setToken, navigate } = useAuth();

  const [login, setLogin] = useState({
    input: {},
    error: "",
    hide: { pwd: true },
  });

  const [loading, setLoading] = useState(false);

  const loginInputHandler = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, input: { ...login.input, [name]: value } });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await loginService(login.input);
      setLoading(false);

      toast.success(`Welcome back, ${data.foundUser.firstName}!`, {
        icon: "👋",
      });

      localStorage.setItem("isAuth", true);
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));

      setToken(data.encodedToken);

      setIsAuth(true);

      navigate("/");
    } catch (err) {
      setLoading(false);
      setLogin({ ...login, error: err.response.data.errors[0] });
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
            <div className="text-center text-danger">{login.error}</div>
            <div>
              <div className="card-heading">Log In</div>
            </div>

            <div className="card-content">
              <form className="form-group" onSubmit={loginHandler}>
                <div className="input-group input input-primary">
                  <label className="input-label">
                    Email<span>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Type here..."
                    name="email"
                    value={login.input.email || ""}
                    onChange={loginInputHandler}
                    required
                  />
                </div>
                <div className="input-group input input-primary">
                  <label className="input-label">
                    Password<span>*</span>
                  </label>
                  <div className="toggle-pwd">
                    <input
                      type={`${login.hide.pwd ? "password" : "text"}`}
                      placeholder="Type here..."
                      name="password"
                      value={login.input.password || ""}
                      onChange={loginInputHandler}
                      required
                    />
                    <i
                      className={`fa-solid ${
                        login.hide.pwd ? "fa-eye" : "fa-eye-slash"
                      }`}
                      onClick={() =>
                        setLogin({
                          ...login,
                          hide: { pwd: !login.hide.pwd },
                        })
                      }
                    ></i>
                  </div>
                </div>

                <button className="btn btn-primary" type="submit">
                  Log In
                </button>
                <button
                  className="btn outline-primary"
                  type="submit"
                  onClick={() =>
                    setLogin({
                      ...login,
                      input: {
                        email: "himadri123@gmail.com",
                        password: "himadri123",
                      },
                    })
                  }
                >
                  Guest Mode
                </button>
              </form>
            </div>

            <div className="card-action">
              <span>New to Essence? </span>
              <Link to="/signup" className="link">
                SignUp
              </Link>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export { Login };
