import { Rate, Avatar } from 'antd';
import { Icon } from '@iconify/react';

import { RatingBox } from './style';

export const columns = [
  {
    title: (
      <span>
        <Icon className='head-icon' icon='ant-design:star-filled' /> Place
      </span>
    ),
    dataIndex: 'place',
    key: 'place',
  },
  {
    title: (
      <span>
        <Icon className='head-icon' icon='ant-design:user' /> Profile
      </span>
    ),
    dataIndex: 'profile',
    key: 'profile',
    render: (text, record) => <Avatar>{record?.fullName[0]}</Avatar>,
  },
  {
    title: (
      <span>
        <Icon className='head-icon' icon='ant-design:idcard' /> Full Name
      </span>
    ),
    dataIndex: 'fullName',
    key: 'fullName',
  },
  {
    title: (
      <span>
        <Icon className='head-icon' icon='ant-design:solution-outlined' />{' '}
        Position
      </span>
    ),
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: (
      <span>
        <Icon className='head-icon' icon='ant-design:star-filled' /> Rating
      </span>
    ),
    dataIndex: 'rating',
    key: 'rating',
    render: (text) => (
      <RatingBox>
        <Rate
          disabled
          defaultValue={text}
          character={<Icon icon='ant-design:star-filled' />}
        />
        <RatingBox.Text> ({text})</RatingBox.Text>
      </RatingBox>
    ),
  },
];
