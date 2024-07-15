import React from 'react';
import { Navigation, Autoplay } from 'swiper/modules';

import {
  TestimonialCarouselNavigationNextButton,
  TestimonialCarouselNavigationPrevButton,
} from './navigations';

import { testimonialsData } from '../../../../shared/utils/testimonialData';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Card, ERSwiper, ProfileBox } from './style';

const testimonialCarousel = {
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 3,
    },
  },
};

const TestimonialCarousel = () => {
  return (
    <ERSwiper
      spaceBetween={30}
      {...testimonialCarousel}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Autoplay]}
      className='testimonial-swiper'
    >
      <TestimonialCarouselNavigationPrevButton />
      <TestimonialCarouselNavigationNextButton />

      {testimonialsData?.map((value) => {
        return (
          <Card key={value?.id}>
            <Card.Descr>{value?.description}</Card.Descr>
            <ProfileBox>
              <ProfileBox.Avatar src={value?.profileImg} alt='profile-img' />
              <div>
                <ProfileBox.Fullname>
                  {value?.name} {value?.surname}
                </ProfileBox.Fullname>
                <ProfileBox.Position>{value.position}</ProfileBox.Position>
              </div>
            </ProfileBox>
          </Card>
        );
      })}
    </ERSwiper>
  );
};

export default TestimonialCarousel;
