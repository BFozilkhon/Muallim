import styled from 'styled-components';

// icons
import { ReactComponent as Logo } from '../../../../../global/assets/icons/logo.svg';

export const Container = styled.div`
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 74px 0px 24px 0px;
  margin-top: 120px;
`;

export const TopFlex = styled.div`
  display: flex;
  align-items: center;
`;

TopFlex.Logo = styled(Logo)``;

TopFlex.Line = styled.div`
  width: 2px;
  height: 50px;
  background-color: white;
  margin: 0px 25px;
`;

TopFlex.Prompt = styled.div`
  color: var(--white-color);
  font-size: 22px;
  font-weight: 6000;
`;

Container.Title = styled.div`
  color: var(--white-color);
  font-size: 26px;
  text-align: center;
  margin: 65px 0px 20px 0px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: ${({ item }) => item && '90px 0px 10px 0px'};
`;

Flex.Item = styled.a`
  color: var(--white-color);
  font-size: 22px;
`;

Container.CopyWrite = styled.p`
  color: var(--white-color);
  font-size: 22px;
`;
