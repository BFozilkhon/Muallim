import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 40px;
  margin-top: 50px;
  @media (max-width: 1200px) {
    gap: 30px;
    margin-top: 30px;
  }
  @media (max-width: 1050px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  @media (max-width: 750px) {
    gap: 25px;
    grid-template-columns: 350px;
    justify-content: center;
  }
  @media (max-width: 600px) {
    gap: 30px 0px;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

Card.Img = styled.img`
  height: 280px;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
  @media (max-width: 1200px) {
    height: 230px;
  }
  @media (max-width: 360px) {
    height: 180px;
  }
`;

Card.Title = styled.h3`
  font-size: 24px;
  color: #232323;
  margin-top: 10px;
  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 920px) {
    font-size: 20px;
    margin-top: 8px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

Card.Description = styled.p`
  font-size: 18px;
  color: #616161;
  margin: 15px 0px 25px 0px;
  @media (max-width: 1200px) {
    font-size: 17px;
    margin: 12px 0px 20px 0px;
  }
  @media (max-width: 920px) {
    font-size: 16px;
    margin: 10px 0px 16px 0px;
  }
  @media (max-width: 600px) {
    font-size: 15px;
    margin: 8px 0px 12px 0px;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 600px) {
    gap: 5px;
  }
`;

IconBox.Text = styled.p`
  font-size: 16px;
  color: #616161;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
