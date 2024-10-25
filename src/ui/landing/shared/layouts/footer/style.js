import styled from 'styled-components';

// icons
import { ReactComponent as Logo } from '../../../../../global/assets/icons/logo.svg';

export const Container = styled.div`
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 74px 40px 24px 40px;
  margin-top: var(--sections-seperator-space);

  .footer-logo {
    width: 200px;
    height: 70px;
  }

  @media (max-width: 1020px) {
    padding: 60px 30px 20px 30px;
  }
  @media (max-width: 620px) {
    padding-left: 25px;
    padding-right: 25px;
  }
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const TopFlex = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

TopFlex.Logo = styled(Logo)``;

TopFlex.Line = styled.div`
  width: 2px;
  height: 50px;
  background-color: white;
  margin: 0px 25px;
  @media (max-width: 480px) {
    width: 100%;
    height: 2px;
    margin: 15px 0px;
  }
`;

TopFlex.Prompt = styled.div`
  color: var(--white-color);
  font-size: 22px;
  font-weight: 6000;
  @media (max-width: 1020px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    text-align: center;
  }
`;

Container.Title = styled.div`
  color: var(--white-color);
  font-size: 26px;
  text-align: center;
  margin: 65px 0px 20px 0px;
  @media (max-width: 1020px) {
    margin: 50px 0px 15px 0px;
    font-size: 24px;
  }
  @media (max-width: 600px) {
    margin-top: 40px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: ${({ item }) => item && '90px 0px 10px 0px'};

  @media (max-width: 1020px) {
    margin: ${({ item }) => item && '60px 0px 10px 0px'};
    min-width: 70%;

    .footer-input {
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin: ${({ item }) => item && '40px 0px 10px 0px'};

    width: 80%;
    gap: 10px;
    .footer-input {
      width: 100%;
    }

    .footer-btn {
      width: 100%;
    }
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;

Flex.Item = styled.a`
  color: var(--white-color);
  font-size: 22px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

Container.CopyWrite = styled.p`
  color: var(--white-color);
  font-size: 22px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
