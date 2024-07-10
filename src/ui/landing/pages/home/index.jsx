import React from 'react';

import Header from './header';
import Purpose from './purpose';
import Partner from './partner';
import TopTeachers from './topTeachers';
import Footer from '../../shared/layouts/footer';
import Top from '../../../../global/generics/top';

const LandingHomePage = () => {
  return (
    <>
      <Header />
      <Partner />
      <Purpose />
      <TopTeachers />
      <Footer />
      <Top />
    </>
  );
};

export default LandingHomePage;
