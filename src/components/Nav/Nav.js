import React from "react";
import {Link} from 'react-router-dom';

const LoggedInView = (currentUser) => {};
const LoggedOutView = () => (
  <ul className="nav navbar-nav pull-xs-right" style={{flexDirection:"row"}}>
    <li className="nav-item">
      <Link to="/react-day-experience-app" className="nav-link">
        Home
      </Link>
    </li>

    <li className="nav-item">
      <Link to="/login" className="nav-link">
        Sign in
      </Link>
    </li>

    <li className="nav-item">
      <Link to="/register" className="nav-link">
        Sign up
      </Link>
    </li>
  </ul>
);

const Nav = (props) => (
  <nav className="navbar navbar-light">
    <div className="container">
      <Link to="/react-day-experience-app" className="navbar-brand">
        Daily Experience
      </Link>

      {props.currentUser ? (
        <LoggedInView currentUser={props.currentUser} />
      ) : (
        <LoggedOutView />
      )}
    </div>
  </nav>
);

export default Nav;
