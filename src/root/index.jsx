import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Students from "../components/Students";

export default class Root extends Component {
    render(){
        return(
            <div>
            <Navbar/>
            <Students/>
            </div>
        )
    }
}