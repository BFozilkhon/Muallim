import React from 'react';

import { Container } from './style';

const BlogHeader = () => {
  return (
    <Container className='er-wrapper'>
      <Container.LocationText>Home / Blog</Container.LocationText>
      <Container.Header>Blog Muallim.</Container.Header>
      <Container.Description>
        We share knowledge in the field of business automation, as well as
        insights that come to us in the process of development and
        implementation
      </Container.Description>
    </Container>
  );
};

export default BlogHeader;
