import React from 'react';

import Navbar from '../../shared/layouts/navbar';
import Footer from '../../shared/layouts/footer';
import RankingTable from './table';

import { topTeachersData } from '../../shared/utils/topTeachersData';

const LandingRankingPage = () => {
  return (
    <>
      <Navbar />
      <RankingTable data={topTeachersData} />
      <Footer />
    </>
  );
};

export default LandingRankingPage;
