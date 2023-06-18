import React from "react";
import { Link } from "react-router-dom";
import './Feature.css'

const Feature = ({ item }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary
  } = item;
  return (
    <div className="feature">
      <img src={company_logo} alt="" />
      <h5>{job_title}</h5>
      <p>{company_name}</p>
      <div className="btnOne">
        <button>{remote_or_onsite}</button>
        <button>{fulltime_or_parttime}</button>
      </div>
      <div className="locationSalary">
        <p>{location}</p>
        <p>{salary}</p>
      </div>
      <Link to={`/item/${id}`}
      ><button className="btnTwo" >View Details</button></Link>
      
    </div>
  );
};

export default Feature;
