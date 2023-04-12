import React from 'react';
import './Category.css'

const Category = ({jobCategory}) => {
    const {logo,name,jobs_available}=jobCategory;
    return (
        <div className='jobCategory'>
            <img className='logo' src={logo} alt="" />
            <h5>{name}</h5>
            <p>{jobs_available} Jobs Available</p>
        </div>
    );
};

export default Category;