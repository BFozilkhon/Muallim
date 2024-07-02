import styled from 'styled-components';

// icon
import { ReactComponent as Star } from '../shared/assets/icons/star.svg';
import { ReactComponent as Email } from '../shared/assets/icons/email.svg';
import { ReactComponent as User } from '../shared/assets/icons/user.svg';

// img
import bgImg from '../shared/assets/images/opener.png';
import teacherImg from '../shared/assets/images/opener-teacher.png';

export const Container = styled.div`
  background-image: url(${bgImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 120px;
  margin: auto;
`;

export const Box1 = styled.div`
  flex: 2;
`;

Box1.Header = styled.div`
  font-size: 64px;
  color: var(--white-color);
  font-weight: bold;
  margin: 40px 0px;
`;

Box1.Line = styled.div`
  background: #3adad9;
  width: 65px;
  height: 5px;
  border-radius: 8px;
`;

Box1.Descr = styled.p`
  font-size: 30px;
  color: var(--white-color);
  margin: 40px 0px;
  width: 90%;
`;

export const Box2 = styled.div`
  flex: 2;
  position: relative;

  .star-position {
    top: 70px;
    left: -40px;
  }

  .user-position {
    bottom: -50px;
    left: -150px;
  }

  .email-position {
    top: 50%;
    right: 0;
  }
`;

Box2.TeacherImg = styled.div`
  background-image: url(${teacherImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 137%;
  width: 85%;
  margin-top: -80px;
`;

// Animated Cards
export const Card = styled.div`
  background-color: var(--white-color);
  border-radius: 12px;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  gap: 25px;
  position: absolute;
  box-shadow: 0px 90px 145px 0px rgba(0, 0, 0, 0.2);
  user-select: none;
`;

export const IconBox = styled.div`
  background-color: ${({ color }) => color};
  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

IconBox.Star = styled(Star)``;
IconBox.Email = styled(Email)``;

export const UserIcon = styled(User)``;

Card.Subtitle = styled.h5`
  color: #595959;
  font-size: 24px;
`;

Card.Descr = styled.p`
  color: #545567;
  font-size: 20px;
`;
