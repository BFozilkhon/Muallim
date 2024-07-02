import React from 'react';

import Opener from './opener';
import Partner from './partner';
import Purpose from './purpose';
import Footer from './shared/layouts/footer';

const LandingPage = () => {
  return (
    <div>
      <Opener />
      <Partner />
      <Purpose />
      <Footer />
    </div>
  );
};

export default LandingPage;
