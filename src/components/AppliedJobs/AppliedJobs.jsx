import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../utilities/fakedb";
import ReviewItem from "../ReviewItem/ReviewItem";

const AppliedJobs = () => {
  const AppliedJobs = useLoaderData();

  return (
    <div>
       <Dropdown className="dropDown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter By
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">remote</Dropdown.Item>
          <Dropdown.Item href="#/action-2">on-site</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {
        AppliedJobs.map(item=><ReviewItem
        key={item.id}
        item={item}></ReviewItem>)
        }
    </div>
  );
};

export default AppliedJobs;
