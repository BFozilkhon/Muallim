import React from 'react';

import Header from './header';
import Purpose from './purpose';
import Partner from './partner';
import TopTeachers from './topTeachers';
import Footer from '../../shared/layouts/footer';
import Top from '../../../../global/generics/top';
import Testimonial from './testimonial';
import FAQ from './faq';

const LandingHomePage = () => {
  return (
    <>
      <Header />
      <Partner />
      <Purpose />
      <TopTeachers />
      <FAQ />
      <Testimonial />
      <Footer />
      <Top />
    </>
  );
};

export default LandingHomePage;
