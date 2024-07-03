import styled from 'styled-components';

export const Container = styled.div`
  padding-top: var(--sections-seperator-space);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cards-gap-seperator-space);

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Box1 = styled.div``;

Box1.Line = styled.div`
  height: 5px;
  width: 70px;
  border-radius: 8px;
  background: var(--primary-color);
`;

Box1.Text = styled.div`
  color: #515151;
  font-size: 30px;
  margin-top: 10px;

  @media (max-width: 1300px) {
    font-size: 26px;
  }
  @media (max-width: 920px) {
    font-size: 24px;
  }
  @media (max-width: 620px) {
    font-size: 22px;
  }
`;

export const Box2 = styled.div`
  width: 800px;
  height: 108px;

  @media (max-width: 1300px) {
    width: 500px;
    height: 100px;
  }
  @media (max-width: 920px) {
    width: 100%;
  }
`;

export const PartnerImg = styled.img`
  width: 170px;
  height: 120px;
  object-fit: contain;
  @media (max-width: 480px) {
    width: 150px;
    height: 110px;
  }
`;
