import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ item }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
  } = item;
  return (
    <div className="review">
      <img src={company_logo} alt="" />
      <div className="job-description">
        <h5>{job_title}</h5>
        <p>{company_name}</p>
        <button className="btn1">{remote_or_onsite}</button>
        <button className="btn2">{fulltime_or_parttime}</button>
        <p>{location}</p>
        <p>{salary}</p>
      </div>
      <a to={`/item/${id}`} ><button className="btnTwo" >View Details</button></a>
    </div>
  );
};

export default ReviewItem;
