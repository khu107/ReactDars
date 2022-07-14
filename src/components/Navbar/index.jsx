import React from "react";
import { Container } from "./style";
import { useContext } from "react";
import { StudentContext } from "../../context";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [data] = useContext(StudentContext);
  // console.log(info);
  return (
    <Container>
      <NavLink activeStyle={{ color: "white" }} to={"/Home"}>
        Home
      </NavLink>
      <NavLink activeStyle={{ color: "white" }} to={"/Contact"}>
        Contact
      </NavLink>
      <NavLink activeStyle={{ color: "white" }} to={"/About"}>
        About
      </NavLink>
      <NavLink activeStyle={{ color: "white" }} to={"/Students"}>
        Students {data.length}
      </NavLink>
    </Container>
  );
};
export default Navbar;
