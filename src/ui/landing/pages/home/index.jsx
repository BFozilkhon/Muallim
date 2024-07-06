import React from 'react';

import Opener from './opener';
import Purpose from './purpose';
import Partner from './partner';
import TopTeachers from './topTeachers';
import Footer from '../../shared/layouts/footer';
import Top from '../../../../global/generics/top';

const LandingHomePage = () => {
  return (
    <div>
      <Opener />
      <Partner />
      <Purpose />
      <TopTeachers />
      <Footer />
      <Top />
    </div>
  );
};

export default LandingHomePage;
