import styled from 'styled-components';

export const Container = styled.div`
  padding-top: var(--sections-seperator-space);
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

export const Box2 = styled.div`
  width: 800px;
  height: 108px;
`;

export const PartnerImg = styled.img`
  width: 170px;
  height: 120px;
  object-fit: contain;
`;
