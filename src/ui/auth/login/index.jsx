import React from 'react';

import ERInput from '../../../global/generics/input';
import ERButton from '../../../global/generics/button';
import ERTooltip from '../../../global/generics/tooltip';

import { Box, Container, Form } from './style';

const Login = () => {
  return (
    <Container>
      <Box>
        <Box.Title>Welcome to Login 🎓</Box.Title>
        <Form>
          <ERInput
            width={'100%'}
            borderRadius={'15px'}
            borderColor={'#A6A6A6'}
            color={'#A6A6A6'}
            placeholder={'Username'}
          />
          <ERInput
            width={'100%'}
            borderRadius={'15px'}
            borderColor={'#A6A6A6'}
            color={'#A6A6A6'}
            placeholder={'Email'}
          />
          <ERInput
            width={'100%'}
            type={'password'}
            borderRadius={'15px'}
            borderColor={'#A6A6A6'}
            color={'#A6A6A6'}
            placeholder={'Password'}
          />
          <ERButton className='login-btn' width={'100%'}>
            Continue
          </ERButton>
        </Form>
        <ERTooltip>
          <Box.Prompt>Forgot Password?</Box.Prompt>
        </ERTooltip>
        <Box.Text>
          New User?{' '}
          <Box.TextLink to='/register'>Create an account</Box.TextLink>
        </Box.Text>
      </Box>
    </Container>
  );
};

export default Login;
