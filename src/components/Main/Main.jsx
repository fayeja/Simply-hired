import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/header';
import Header1stPart from '../Header1stPart/Header1stPart';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;