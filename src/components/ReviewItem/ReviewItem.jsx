import React from "react";
import { Link } from "react-router-dom";
import "./ReviewItem.css";
import Dropdown from "react-bootstrap/Dropdown";

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
    <div>
      {/* <Dropdown className="dropDown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter By
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">remote</Dropdown.Item>
          <Dropdown.Item href="#/action-2">on-site</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}

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
        <Link to={`/item/${id}`}>
          <button className="btnTwo">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewItem;
