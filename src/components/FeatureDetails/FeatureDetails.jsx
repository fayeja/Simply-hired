import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import "./FeatureDetails.css";

const FeatureDetails = () => {
  const { featureId } = useParams();

  const featureDetail = useLoaderData();

  const [job, setJob] = useState({});

  useEffect(() => {
    const jobData = featureDetail.find((feature) => feature.id == featureId);
    setJob(jobData);
  }, []);

  useEffect(() => {
    const storeData = getShoppingCart();
    const saveProduct = [];
    for (const id in storeData) {
      const addProduct = featureDetail.find((product) => product.id === id);
      
      saveProduct.push(addProduct);
    }
  }, [featureDetail]);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information: { phone, email } = {},
    location,
  } = job;
 

  const handleAddToAppliedJob = (job) => {
    addToDb(job.id);
  };

  return (
    <div className="featureDetail">
      <div className="jobDescription">
        <h6>Job Description:</h6>
        <p>{job_description}</p>

        <h6>Job Responsibility:</h6>
        <p>{job_responsibility}</p>

        <h6>Educational Requirements:</h6>
        <p>{educational_requirements}</p>

        <h6> Experiences:</h6>
        <p>{experiences}</p>
      </div>
      <div>
        <div className="cartDescription">
          <h5>Job Details</h5>
          <p>Salary:{salary}</p>
          <p>Job Title:{job_title} </p>
          <h5>Contact Information</h5>
          <p>Phone:{phone}</p>
          <p>Email:{email}</p>
          <p>Address:{location}</p>
        </div>
        <button onClick={() => handleAddToAppliedJob(job)} className="Button">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default FeatureDetails;
