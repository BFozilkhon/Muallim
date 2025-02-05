import React from 'react';

import ERButton from '../../../../../global/generics/button';
import ERInput from '../../../../../global/generics/input';
import logo from '../../assets/images/logo.jpg';

import { Container, Flex, TopFlex } from './style';

const Footer = () => {
  return (
    <Container>
      <TopFlex>
        <img className='footer-logo' src={logo} alt='' />
        {/* <TopFlex.Logo /> */}
        <TopFlex.Line />
        <TopFlex.Prompt>
          Rate Your Teacher <br /> With EduRate
        </TopFlex.Prompt>
      </TopFlex>
      <Container.Title>Send your message via Email</Container.Title>
      <Flex>
        <ERInput className='footer-input' placeholder={'Write Your Message'} />
        <ERButton className='footer-btn' borderRadius={'80px'}>
          Sending
        </ERButton>
      </Flex>

      <Flex item={true}>
        <Flex.Item>About</Flex.Item>
        <Flex.Item>Privacy Policy</Flex.Item>
        <Flex.Item>Terms & Conditions</Flex.Item>
      </Flex>
      <Container.CopyWrite>© 2024 ScriptOne Team.</Container.CopyWrite>
    </Container>
  );
};

export default Footer;
