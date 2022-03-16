import { Link } from "react-router-dom";
import img from "../images/bg_1.jpg";

const Signup = () => {
  return (
    <div className="d-lg-flex half">
      <div
        className="bg order-1 order-md-2"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="contents order-2 order-md-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <h3>
                Signup to the <strong>App</strong>
              </h3>
              <p className="mb-4">
                Already Registered? <Link to="/login">Login Here</Link>
              </p>
              <form action="#" method="post">
                <div className="form-group first">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="your-email@gmail.com"
                    id="username"
                  />
                </div>
                <div className="form-group last mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password"
                    id="password"
                  />
                </div>

                <input
                  type="submit"
                  value="Signup"
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

export default Signup;
