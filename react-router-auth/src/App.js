

import React from "react";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';

import Admin from './pages/Admin';
import { AuthContext } from "./context/auth";
 

function App(props) {

  return (
    <AuthContext.Provider value={false}>

    <Router>

      <div>

        <ul>

          <li>

            <Link to="/">Home Page</Link>

          </li>

          <li>

            <Link to="/admin">Admin Page</Link>

          </li>

        </ul>

        <Route exact path="/" component={Home} />

        <Route path="/admin" component={Admin} />

      </div>

    </Router>
  </AuthContext.Provider>

  );
}
 

export default App;
