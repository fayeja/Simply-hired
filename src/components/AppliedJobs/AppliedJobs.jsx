import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../utilities/fakedb";
import ReviewItem from "../ReviewItem/ReviewItem";

const AppliedJobs = () => {
  const AppliedJobs = useLoaderData();

  return (
    <div>
      {
        AppliedJobs.map(item=><ReviewItem
        key={item.id}
        item={item}></ReviewItem>)
        }
    </div>
  );
};

export default AppliedJobs;
