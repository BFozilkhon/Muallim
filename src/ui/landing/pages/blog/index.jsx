import React from 'react';

import Navbar from '../../shared/layouts/navbar';
import Footer from '../../shared/layouts/footer';
import BlogHeader from './header';
import BlogCategory from './category';
import BlogNews from './news';

const LandingBlogPage = () => {
  return (
    <>
      <Navbar />
      <BlogHeader />
      <BlogCategory />
      <BlogNews />
      <Footer />
    </>
  );
};

export default LandingBlogPage;
