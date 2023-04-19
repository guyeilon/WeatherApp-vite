import Navbar from 'components/Layout/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default Layout;
