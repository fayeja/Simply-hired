import React from "react";
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import './Category1.css'

const Category1 = () => {
  const category = useLoaderData();
  return (
    <div className="category">
      {category.map((jobCategory) => (
        <Category key={jobCategory.id} jobCategory={jobCategory}></Category>
      ))}
    </div>
  );
};

export default Category1;
