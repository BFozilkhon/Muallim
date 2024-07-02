// PartnerCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { partnerData } from '../../shared/utils/partnerData';

import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import { PartnerImg } from '../style';

const PartnerCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {partnerData?.map(({ id, img }) => {
        return (
          <SwiperSlide key={id}>
            <PartnerImg src={img} alt={`partner-${id}`} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PartnerCarousel;
