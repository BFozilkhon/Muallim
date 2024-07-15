import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--sections-seperator-space);
`;

Container.Title = styled.h1``;

Container.TitleDescr = styled.p`
  margin-top: var(--title-description-up-seperator-space);
  margin-bottom: var(--title-description-bottom-seperator-space);
  width: 50%;

  @media (max-width: 920px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  position: relative;

  .swiper {
    overflow-x: hidden !important;
    overflow-y: visible !important;
    display: flex;
    width: 85%;
    position: static;
    padding: 30px 10px;
  }

  .swiper-wrapper {
    display: flex !important;
    align-items: start !important;
  }

  .swiper-slide {
    height: 100% !important;
  }
`;
