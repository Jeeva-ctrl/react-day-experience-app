import React from "react";
import { Link } from "react-router-dom";

const LoggedInView = ({email,currentUser,onLogutClick}) => (
  <ul className="nav navbar-nav pull-xs-right" style={{ flexDirection: "row" }}>
    <li className="nav-item home_nav">
      <Link to="/react-day-experience-app" className="nav-link">
        Home
      </Link>
    </li>
    {window.sessionStorage.setItem("sessionToken", currentUser)}
    {window.sessionStorage.setItem("userEmail", email)}
    <li className="nav-item">
      <Link to="/register" className="nav-link">
         <img src={require(`../../assets/profile.png`)}/>    
         <span className="login_email">{email}</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link onClick ={ onLogutClick} className="nav-link">
        
        Log Out
      </Link>
    </li>
   
  </ul>
);
const LoggedOutView = () => (
  <ul className="nav navbar-nav pull-xs-right" style={{ flexDirection: "row" }}>
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
        <LoggedInView currentUser={props.currentUser} email={props.email} onLogutClick = {props.onLogutClick}/>
      ) : (
        <LoggedOutView />
      )}
    </div>
  </nav>
);

export default Nav;
