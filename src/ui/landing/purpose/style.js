import styled from 'styled-components';

import { ReactComponent as PurposeIcon1 } from '../shared/assets/icons/purpose1.svg';

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
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 90px;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const IconBox = styled.div`
  width: 102px;
  height: 102px;
  border-radius: 26px;
  background: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

IconBox.Icon1 = styled(PurposeIcon1)``;

Box.Subtitle = styled.h3`
  margin: 48px 0px 28px 0px;
`;

Box.Description = styled.p`
  text-align: center;
  width: 90%;
`;
