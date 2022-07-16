// import React, { Component } from "react";

// export default class Root extends Component {
//   render() {
//     return <React.StrictMode></React.StrictMode>;
//   }
// }

import React from "react";
import "../index.css";

import { Switch, Route, NavLink } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import ErrorPage from "../ErrorPage";
import Footer from "../Footer";
export default function Root() {
  const activeStyle = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <div>
      <nav className="nav">
        <NavLink exact to={"/"} activeStyle={activeStyle}>
          Home
        </NavLink>
        <NavLink to={"/about"} activeStyle={activeStyle}>
          About
        </NavLink>
        <NavLink to={"/contact"} activeStyle={activeStyle}>
          Contact
        </NavLink>
      </nav>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"*"} component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  );
}
