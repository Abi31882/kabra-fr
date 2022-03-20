import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../config/store";
import { loginBeginAction } from "../config/store/actions/auth.actions";
import { authLoadingSelector } from "../config/store/selectors/auth.selectors";
import img from "../images/bg_1.jpg";
import Loader from "./loader";

const Login = () => {
  const dispatch = useDispatch();
  const loading = useAppSelector(authLoadingSelector);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  if (loading) {
    return <Loader />;
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(loginBeginAction({ userName, password }));
  };

  return (
    <div className="d-lg-flex half" style={{ zIndex: 1 }}>
      <div
        className="bg order-1 order-md-2"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="contents order-2 order-md-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <h3>
                Login to the <strong>App</strong>
              </h3>
              <p className="mb-4">
                New here? <Link to="/signup">Signup</Link>
              </p>
              <form
                onSubmit={(e) => {
                  onSubmit(e);
                }}
              >
                <div className="form-group first">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="your-email@gmail.com"
                    id="username"
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group last mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password"
                    id="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <input
                  type="submit"
                  value="Log In"
                  className="btn btn-block btn-primary"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
