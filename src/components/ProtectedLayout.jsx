import React from 'react'
import { Outlet } from 'react-router';
import ScrollToTop from './ScrollToTop';

const ProtectedLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default ProtectedLayout