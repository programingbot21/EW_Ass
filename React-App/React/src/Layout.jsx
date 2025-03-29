import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Fotter/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    );
}

export default Layout;
