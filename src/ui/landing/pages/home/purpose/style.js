import styled from 'styled-components';

// icon
import { ReactComponent as PurposeIcon1 } from '../../../shared/assets/icons/purpose1.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: var(--sections-seperator-space);
`;

Container.Title = styled.h1``;

Container.TitleDescr = styled.p`
  width: 50%;
  margin-top: var(--title-description-up-seperator-space);
  margin-bottom: var(--title-description-bottom-seperator-space);
  @media (max-width: 1300px) {
    width: 60%;
  }
  @media (max-width: 920px) {
    width: 70%;
  }
  @media (max-width: 620px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--cards-gap-seperator-space);
  width: 100%;
  @media (max-width: 920px) {
    flex-wrap: wrap;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  @media (max-width: 920px) {
    flex: 300px;
    width: fit-content;
    box-shadow: 0px 8px 30px 0px rgba(38, 45, 118, 0.15);
    padding: 16px;
    border-radius: 16px;
  }
  @media (max-width: 600px) {
    padding: 20px 0px;
  }
`;

export const IconBox = styled.div`
  width: 102px;
  height: 102px;
  border-radius: 26px;
  background: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1300px) {
    width: 90px;
    height: 90px;
    border-radius: 20px;
  }
  @media (max-width: 620px) {
    width: 70px;
    height: 70px;
    border-radius: 12px;
  }
`;

IconBox.Icon1 = styled(PurposeIcon1)`
  @media (max-width: 1300px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 620px) {
    width: 30px;
    height: 30px;
  }
`;

Box.Subtitle = styled.h3`
  margin: 48px 0px 28px 0px;

  @media (max-width: 1300px) {
    margin: 40px 0px 20px 0px;
  }
  @media (max-width: 920px) {
    margin: 30px 0px 15px 0px;
  }
  @media (max-width: 620px) {
    margin: 20px 0px 10px 0px;
  }
`;

Box.Description = styled.p`
  text-align: center;
  width: 90%;
`;
