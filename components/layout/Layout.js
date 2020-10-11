import React from 'react';
import Navbar from './Navbar';

const Layout = ({children}) => (
  <div className="bg-custom-0-dblue">
    <Navbar />
    {children}
  </div>
);

export default Layout;
