import React from 'react'
import {Outlet} from 'react-router-dom';
import Nav from '../section/Navbar/Nav';
import Footer from '../section/Footer/Footer';


const AppLayout = () => {
  return (
    <div>
        <Nav />
        <Outlet />
        <Footer/>
    </div>
  )
}

export default AppLayout;
