import React, { useEffect, useState } from "react";
import Category1 from "../Category1/Category1";
import Feature from "../Feature/Feature";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Header2ndPart from "../Header2ndPart/Header2ndPart";
import "./Home.css";

const Home = () => {
  const [features, setFeatures] = useState([]);

  const [dataSlice, setDataSlice] = useState(true);

  useEffect(() => {
    fetch("feature.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <div>
      <div>
        <Header2ndPart></Header2ndPart>
      </div>
      <div className="Home">
        <h2 className="list">Job Category List </h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div>
          <Category1></Category1>
        </div>
        <div>
          <h2 className="list">Featured Jobs </h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
          <div className="FeaturedJobs">
            {/* <FeaturedJobs key={features.id} features={features}></FeaturedJobs> */}
            {dataSlice === true
              ? features
                  .slice(0, 4)
                  .map((item) => <Feature key={item.id} item={item}></Feature>)
              : features.map((item) => (
                  <Feature key={item.id} item={item}></Feature>
                ))}
          </div>
        </div>
        <div>
          <button
            onClick={() => setDataSlice(false)}
            className={dataSlice === false ? "btn-none" : "btn"}
          >
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
