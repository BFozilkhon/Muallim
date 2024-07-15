import React from 'react';
import { Segmented } from 'antd';

import { Container } from './style';

const BlogCategory = () => (
  <Container className='er-wrapper'>
    <Segmented
      options={[
        'All',
        'Education',
        'Student Success',
        'Teacher Ratings',
        'Announcements',
      ]}
    />
  </Container>
);
export default BlogCategory;
