import React from 'react';

import { columns } from './columns';

import { Container, StyledTable } from './style';

const RankingTable = ({ data }) => {
  const dataSource = data.map((item, index) => ({
    key: item.id,
    place: index + 1,
    profile: item.profile,
    fullName: `${item.name} ${item.surname}`,
    position: item.position,
    rating: item.rating,
  }));

  return (
    <Container className='er-wrapper'>
      <Container.Title className='er-title'>
        EduRate Teachers <span className='er-title-mark'> Ranking Board</span>
      </Container.Title>
      <StyledTable
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
    </Container>
  );
};

export default RankingTable;
