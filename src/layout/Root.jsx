import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer ';

const Root = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='min-h-[calc(100vh-365px)] max-w-7xl mx-auto px-4 my-8 md:my-10'>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Root;