import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

import { blogPostsData } from '../../../shared/utils/blogPostsData';

import { Card, Container, FlexBox, IconBox } from './style';

const BlogNews = () => {
  const navigate = useNavigate();
  return (
    <Container className='er-wrapper'>
      {blogPostsData?.map((value) => {
        return (
          <Card
            onClick={() =>
              navigate(
                `/blog/${value?.id}-${value?.title
                  .replace(/ /g, '-')
                  .toLocaleLowerCase()}`
              )
            }
            key={value?.id}
          >
            <Card.Img src={value?.img} alt='post-img' />
            <Card.Title>{value?.title}</Card.Title>
            <Card.Description>{value?.description}</Card.Description>
            <FlexBox>
              <IconBox>
                <Icon icon='clarity:date-line' />
                <IconBox.Text>{value?.date}</IconBox.Text>
              </IconBox>
              <IconBox>
                <Icon icon='carbon:time' />
                <IconBox.Text>{value?.readingTime}</IconBox.Text>
              </IconBox>
              <IconBox>
                <Icon icon='ph:eye-thin' />
                <IconBox.Text>{value?.views}</IconBox.Text>
              </IconBox>
            </FlexBox>
          </Card>
        );
      })}
    </Container>
  );
};

export default BlogNews;
