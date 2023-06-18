import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header1stPart from "../Header1stPart/Header1stPart";
import Header2ndPart from "../Header2ndPart/Header2ndPart";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerMain">
         <Header1stPart></Header1stPart>
  </div>
  );
};

export default Header;
