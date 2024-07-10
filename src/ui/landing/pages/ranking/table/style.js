import styled from 'styled-components';
import { Table } from 'antd';

export const Container = styled.div``;

Container.Title = styled.h1`
  margin-top: var(--sections-seperator-space);
  margin-bottom: 40px;
`;

export const StyledTable = styled(Table)`
  width: 100%;
  margin: 0px auto;

  .head-icon {
    font-size: 22px;
  }

  .ant-table-thead > tr > th {
    background-color: var(--primary-color);
    color: white;
    font-size: 18px;
  }

  .ant-table-tbody > tr > td {
    background-color: white;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }

  .ant-table-row:hover > td {
    background-color: #6c9afe !important;
    color: white;
  }

  .ant-table {
    border: 1px solid #f0f0f0;
  }

  .ant-table-thead {
    border-bottom: 1px solid #f0f0f0;
  }

  .ant-table-cell span {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .ant-table-tbody {
    border-top: 1px solid #f0f0f0;
  }

  @media (max-width: 920px) {
    overflow-x: scroll;
    table {
      width: 1000px !important;
    }
  }
`;

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
`;

RatingBox.Text = styled.div`
  margin-left: 10px;
  font-size: 18px;
`;
