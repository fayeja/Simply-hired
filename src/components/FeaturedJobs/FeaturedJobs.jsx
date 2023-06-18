import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Feature from '../Feature/Feature';
import './FeaturedJobs.css'

const FeaturedJobs = ({features}) => {
    // const feature=useLoaderData();
    return (
        <div className='FeaturedJobs'>
            {
               features.map((item) => (<Feature
               key={item.id}
               item={item}>
                </Feature>))
            }
        </div>
    );
};

export default FeaturedJobs;