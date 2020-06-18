import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginUser, ClearLoginError } from "../../actions/Login/action";
import { ClearError } from "../../actions/error";
import { connect } from "react-redux";
import CustomizedDialogs from "../Modal";
import Loader from "../Loader";
import { withRouter } from "react-router";
const Login = (props) => {
  useEffect( () => {
    props.ClearLoginError();
  }, [])
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showLoading, setLoading] = useState(false);

  const handleSubmit = (ev) => {
    props.ClearLoginError();
    setLoading(true);
    props.LoginUser(email, password, (isSuccess) => {
      if (isSuccess) {
        props.history.push("/react-day-experience-app");
      }
      setLoading(false);
    });
    ev.preventDefault();
  };

  return (
    <div className="Login-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <Link to="/register" className="link_text">
                Create an account?
              </Link>
            </p>
            {showLoading ? <Loader showLoading={true} /> : ""}
            {/* <ListErrors errors={this.props.errors} /> */}
            {props.error ? (
              <CustomizedDialogs
                title="Error"
                message={props.error}
                initialState={true}
              />
            ) : (
              ""
            )}
            {/* <ListErrors errors={this.props.errors} /> */}

            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={false}
                >
                  Sign In
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.LoginReducer.token,
  error: state.LoginReducer.error,
});

export default withRouter(
  connect(mapStateToProps, { LoginUser, ClearLoginError })(Login)
);
