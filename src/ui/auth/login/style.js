import styled from 'styled-components';
import { Link } from 'react-router-dom';

//icon
import { ReactComponent as Logo } from '../../../global/assets/icons/logo-black.svg';

//img
import loginBg from '../shared/assets/images/login-bg.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${loginBg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-btn {
    margin-top: 10px;
  }

  @media (max-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (max-width: 480px) {
    padding: 40px 20px;
    height: auto;
    min-height: 100vh;
    .login-btn {
      margin-top: 5px;
    }
  }
`;

export const Box = styled.div`
  width: 470px;
  height: auto;
  background-color: white;
  padding: 30px 50px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
    padding: 30px 35px;
  }
  @media (max-width: 480px) {
    padding: 20px 25px;
  }
`;

Box.Logo = styled(Logo)`
  @media (max-width: 480px) {
    transform: scale(0.8);
  }
`;

Box.Title = styled.h3`
  color: #1f1f1f;
  font-size: 24px;
  margin: 15px 0px;
  @media (max-width: 480px) {
    font-size: 22px;
    margin: 10px 0px;
  }
`;

Box.Prompt = styled.p`
  color: var(--primary-color);
  font-size: 18px;
  margin-top: 15px;
`;

Box.Text = styled.p`
  font-size: 20px;
  color: #1f1f1f;
  font-weight: 700;
  margin-top: 20px;
  @media (max-width: 480px) {
    font-size: 18px;
    text-align: center;
    margin-top: 15px;
  }
`;

Box.TextLink = styled(Link)`
  color: var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
  @media (max-width: 480px) {
    display: block;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
