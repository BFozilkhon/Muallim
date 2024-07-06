import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--sections-seperator-space);

  .swiper-3d .swiper-slide-shadow-left {
    background-image: none !important;
  }

  .swiper-3d .swiper-slide-shadow-right {
    background-image: none !important;
  }
`;

Container.Title = styled.h1``;

Container.Descr = styled.p`
  margin-top: var(--title-description-up-seperator-space);
  margin-bottom: var(--title-description-bottom-seperator-space);
`;

export const Wrapper = styled.div``;
