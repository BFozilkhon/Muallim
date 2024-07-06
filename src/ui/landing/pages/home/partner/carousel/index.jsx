// PartnerCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { partnerData } from '../../../../shared/utils/partnerData';

import 'swiper/css';
import { PartnerImg } from '../style';

const partnerCarousel = {
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    620: {
      slidesPerView: 3,
    },
    920: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 3,
    },
  },
};

const PartnerCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      {...partnerCarousel}
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
