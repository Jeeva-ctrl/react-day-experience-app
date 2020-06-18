import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from '../src/components/Register/Register'
import Login from '../src/components/Login/Login'
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../src/components/Home/Home';

import Nav from '../src/components/Nav/Nav';
import { connect } from "react-redux";

function App() {
  return (
    
    <div >
      <Nav currentUser = {false}/>
      <Switch>
      <Route path="/react-day-experience-app" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
     </Switch>
    </div>
   
  );
}
const mapStateToProps = (state)=>(
  {
    currentUser : null
  }
)

export default connect(mapStateToProps)(App);
