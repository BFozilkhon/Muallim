import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 80px;
  @media (max-width: 920px) {
    padding-top: 60px;
  }
  @media (max-width: 600px) {
    padding-top: 50px;
  }
  @media (max-width: 480px) {
    padding-top: 40px;
  }
`;

Container.LocationText = styled.p`
  font-size: 16px;
  color: #848484;
`;

Container.Header = styled.h1`
  font-size: 42px;
  font-weight: bold;
  margin: 40px 0px 20px 0px;
  @media (max-width: 920px) {
    font-size: 36px;
    margin: 30px 0px 15px 0px;
  }
  @media (max-width: 600px) {
    font-size: 32px;
    margin: 25px 0px 10px 0px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
    margin: 20px 0px 10px 0px;
  }
`;

Container.Description = styled.p`
  font-size: 18px;
  color: #616161;
  width: 50%;
  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 920px) {
    font-size: 16px;
    width: 70%;
  }
  @media (max-width: 600px) {
    font-size: 15px;
    width: 90%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
