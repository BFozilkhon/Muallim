import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

//icon
import { ReactComponent as Crown } from '../../../../shared/assets/icons/crown.svg';
import { ReactComponent as User } from '../../../../shared/assets/icons/users.svg';
import { ReactComponent as Arrow } from '../../../../shared/assets/icons/full-arrow.svg';

export const ERSwiper = styled(Swiper)`
  width: 1160px;
  height: 520px;
  margin-top: -50px;

  .swiper-wrapper {
    margin-top: 50px;
  }

  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    background-color: var(--primary-color);
    opacity: 0.5;
    border-radius: 50%;
    margin: 0 4px;
    transition: opacity 0.3s;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
  }

  @media (max-width: 1200px) {
    width: 90vw;
    height: 450px;
  }
  @media (max-width: 920px) {
    height: 420px;
  }
  @media (max-width: 600px) {
    height: 380px;

    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
    }
  }
`;

export const Card = styled(SwiperSlide)`
  width: 400px !important;
  height: 400px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 8px 45px 0px rgba(38, 45, 118, 0.15);
  border-radius: 30px;
  user-select: none;
  background: var(--white-color);
  padding: 20px;

  @media (max-width: 1200px) {
    width: 350px !important;
    height: 350px !important;
    .top-teachers-btn {
      padding: 10px 20px !important;
      font-size: 20px;
    }
  }

  @media (max-width: 920px) {
    width: 300px !important;
    height: 300px !important;
    padding: 15px;
  }
  @media (max-width: 600px) {
    width: 270px !important;
    height: 270px !important;
    padding: 12px;

    .top-teachers-btn {
      padding: 8px 15px;
      font-size: 18px;
      height: 50px;
    }
  }
`;

Card.Crown = styled(Crown)`
  @media (max-width: 1200px) {
    transform: scale(0.9);
  }
  @media (max-width: 600px) {
    transform: scale(1.15);
    margin-bottom: 10px;
  }
`;

export const Circle = styled.div`
  width: 124px;
  height: 124px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  background-color: #d9d9d9;
  margin-top: -10px;
  @media (max-width: 1200px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 920px) {
    width: 80px;
    height: 80px;
  }
  @media (max-width: 600px) {
    width: 65px;
    height: 65px;
  }
`;

Circle.User = styled(User)`
  @media (max-width: 1200px) {
    transform: scale(0.8);
  }
  @media (max-width: 920px) {
    transform: scale(0.7);
  }
  @media (max-width: 600px) {
    transform: scale(0.6);
  }
`;

Card.Title = styled.h3`
  color: #515151;
`;

Card.Descr = styled.p`
  margin: 5px 0px 15px 0px;
`;

Card.BtnArrow = styled(Arrow)`
  margin-left: 15px;
  @media (max-width: 1200px) {
    margin-left: 10px;
    transform: scale(0.9);
  }

  @media (max-width: 600px) {
    margin-left: 8px;
    transform: scale(0.8);
  }
`;
