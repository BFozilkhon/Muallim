import React from 'react';
import { useSwiper } from 'swiper/react';

import { NextButton, PrevButton } from './style';

export const TestimonialCarouselNavigationPrevButton = () => {
  const swiper = useSwiper();
  return (
    <PrevButton onClick={() => swiper.slidePrev()}>
      <PrevButton.Arrow />
    </PrevButton>
  );
};

export const TestimonialCarouselNavigationNextButton = () => {
  const swiper = useSwiper();
  return (
    <NextButton onClick={() => swiper.slideNext()}>
      <NextButton.Arrow />
    </NextButton>
  );
};
