import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Students from "../components/Students";
import Context from "../context";

export default class Root extends Component {
  render() {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <Context>
            <Navbar />
            <Students />
          </Context>
        </BrowserRouter>
      </React.StrictMode>
    );
  }
}
