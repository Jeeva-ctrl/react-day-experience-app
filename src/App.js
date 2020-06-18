import React from "react";
import "./App.css";
import Register from "../src/components/Register/Register";
import Login from "../src/components/Login/Login";
import { Route, Switch } from "react-router-dom";
import Home from "../src/components/Home/Home";
import { Logout } from "../src/actions/Login/action";
import { withRouter } from "react-router";
import Nav from "../src/components/Nav/Nav";
import { connect } from "react-redux";

function App(props) {
  return (
    <div>
      <Nav
        currentUser={props.currentUser}
        email={props.email}
        onLogutClick={() => props.Logout()}
      />
      <Switch>
        <Route path="/react-day-experience-app" exact component={Home} />
        <Route
          path="/register"
          component={props.currentUser ? Home : Register}
        />
        <Route path="/login" component={props.currentUser ? Home : Login} />
      </Switch>
    </div>
  );
}
const mapStateToProps = (state) => ({
  currentUser: state.LoginReducer.token,
  email: state.LoginReducer.email,
});

export default withRouter(connect(mapStateToProps, { Logout })(App));
