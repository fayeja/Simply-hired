import React from "react";
import Header1stPart from "../Header1stPart/Header1stPart";
import Header2ndPart from "../Header2ndPart/Header2ndPart";
import "./Header.css";

const Header = () => {
  return (
   <div className="headerMain">
     <div className="header">
          <Header1stPart></Header1stPart>
     </div>
    {/* <div>
          <Header2ndPart></Header2ndPart>
    </div> */}
   </div>
  );
};

export default Header;
