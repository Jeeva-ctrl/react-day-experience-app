import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { RegisterUser } from "../../actions/Register/action";
import {ClearError} from '../../actions/error';
import { connect } from "react-redux";
import CustomizedDialogs from "../Modal";
import Loader from '../Loader';
import { withRouter } from "react-router";

const Register = (props) => {
  useEffect( () => {
    props.ClearError();
  }, [])
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const  [showLoading, setLoading] = useState(false);


  const handleSubmit = (ev) => {
      setLoading(true); 
    props.RegisterUser(username, email, password ,()=>setLoading(false));
    ev.preventDefault();
  };

  return (
    <div className="Reg-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <Link to="/login" className="link_text">Have an account?</Link>
            </p>
             {showLoading?<Loader showLoading={true}/>:""}
            {/* <ListErrors errors={this.props.errors} /> */}
            {props.errorHandler && props.errorHandler.showErrorModal ? (
              <CustomizedDialogs
                title="Error"
                message={props.errorHandler.errorMessage}
                initialState={true}
              />
            ) : (
              ""
            )}
            {props.registrationSuccess ? (
              <CustomizedDialogs
                title="Success"
                message={"Welcome to the club 😊 .Please sign in to enjoy the experience ride"}
                initialState={true}  redirectUri = {"/login"} history ={props.history}
              />
            ) : (
              ""
            )}

            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    required
                    placeholder="Username"
                    maxLength={50}
                    minLength={4}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    required
                    minLength={5}
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
                  Sign up
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
  errorHandler: state.errorHandler,
  registrationSuccess : state.registrationSuccess.registrationSuccess
});

export default withRouter(connect(mapStateToProps, { RegisterUser ,ClearError})(Register));
