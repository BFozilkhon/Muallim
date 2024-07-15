import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ERSwiper = styled(Swiper)`
  .swiper-pagination {
    bottom: 10px;
  }
`;

export const Card = styled(SwiperSlide)`
  padding: 30px 24px !important;
  background: var(--white-color);
  box-shadow: 0px 8px 45px 0px rgba(38, 45, 118, 0.15);
  border-radius: 16px;
  height: 100% !important;

  @media (max-width: 920px) {
    padding: 20px 16px !important;
  }
`;

Card.Descr = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #555555;
  margin-bottom: 20px;
  @media (max-width: 920px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
  @media (max-width: 480px) {
    font-size: 15px;
    margin-bottom: 10px;
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 920px) {
    gap: 10px;
  }
`;

ProfileBox.Avatar = styled.img`
  @media (max-width: 920px) {
    width: 50px;
    height: 50px;
  }
`;

ProfileBox.Fullname = styled.h3`
  font-size: 20px;
  color: #222222;
  margin-bottom: 4px;
  @media (max-width: 920px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

ProfileBox.Position = styled.h3`
  font-size: 16px;
  color: #555555;
  @media (max-width: 920px) {
    font-size: 14px;
  }
`;
