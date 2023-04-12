import React from "react";
import "./Header1stPart.css";

const Header1stPart = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="header">
      <h3 onClick={handleGoBack}>SimplyHired</h3>
      <nav>
        <a to="/statistic">Statistics</a>
        <a to="/applied_job">Applied Jobs</a>
        <a to="/blog">Blog</a>
      </nav>
      <button className="ApplyButton">Start Applying</button>
    </div>
  );
};

export default Header1stPart;
