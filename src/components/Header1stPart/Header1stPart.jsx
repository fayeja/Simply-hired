import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header1stPart.css";

const Header1stPart = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="header">
      <Link> <h3 onClick={handleGoBack} >SimplyHired</h3></Link>
      <nav>
        <Link to="/statistic">Statistics</Link>
        <Link to="/applied_job">Applied Jobs</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <button className="ApplyButton">Start Applying</button>
    </div>
  );
};

export default Header1stPart;
