import React from 'react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

import ERButton from '../../../../../../global/generics/button';

import { topTeachersData } from '../../../../shared/utils/topTeachersData';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Card, Circle, ERSwiper } from './style';

const topTeachersCarousel = {
  breakpoints: {
    320: {
      spaceBetween: 45,
    },
    600: {
      spaceBetween: 60,
    },
    920: {
      spaceBetween: 90,
    },
    1200: {
      spaceBetween: 130,
    },
  },
};

const TopTeachersCarousel = () => {
  return (
    <ERSwiper
      {...topTeachersCarousel}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 5,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}"></span>`;
        },
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
    >
      {topTeachersData.map((value, index) => {
        return (
          <Card key={index}>
            <Card.Crown />
            <Circle>
              <Circle.User />
            </Circle>
            <Card.Title className='er-subtitle'>
              {value?.name} {value?.surname}
            </Card.Title>
            <Card.Descr className='er-description'>
              {value?.position}
            </Card.Descr>
            <ERButton
              className='top-teachers-btn'
              padding='13px 25px'
              type='outlined'
            >
              Go to Profile
              <Card.BtnArrow />
            </ERButton>
          </Card>
        );
      })}
      <div className='swiper-pagination'></div>
    </ERSwiper>
  );
};

export default TopTeachersCarousel;
