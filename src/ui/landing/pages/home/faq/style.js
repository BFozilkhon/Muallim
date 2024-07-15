import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--sections-seperator-space);
  max-width: 1200px !important;
`;

Container.Title = styled.h1`
  margin-bottom: 40px;
  text-align: start;
  @media (max-width: 920px) {
    margin-bottom: 30px;
  }
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  @media (max-width: 920px) {
    gap: 12px;
  }
`;

export const Collapse = styled.div`
  background: #f2f3f5;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

export const CollapseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  font-size: 24px;
  @media (max-width: 920px) {
    padding: 15px;
    font-size: 22px;
  }
  @media (max-width: 600px) {
    padding: 12px;
    font-size: 20px;
  }
  @media (max-width: 480px) {
    padding: 10px;
    font-size: 18px;
  }
`;

export const CollapseBody = styled.div`
  max-height: ${({ active }) => (active ? '500px' : '0')};
  padding: ${({ active }) => (active ? '0px 20px 16px 20px' : '0 20px')};
  font-size: 18px;
  line-height: 1.5;
  overflow: hidden;
  transition: all 0.3s ease;
  color: #696984;
  @media (max-width: 920px) {
    font-size: 17px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const ArrowIcon = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid
    ${({ active }) => (active ? 'var(--primary-color)' : 'var(--white-color)')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background-color: ${({ active }) =>
    active ? 'var(--primary-color)' : 'var(--white-color)'};
  color: ${({ active }) =>
    active ? 'var(--white-color)' : 'var(--primary-color)'};
  font-size: 40px;
  @media (max-width: 920px) {
    width: 35px;
    height: 35px;
    font-size: 35px;
  }
  @media (max-width: 600px) {
    margin-left: 10px;
  }
`;
