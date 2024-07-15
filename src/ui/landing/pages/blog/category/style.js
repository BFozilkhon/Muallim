import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 30px;

  .ant-segmented {
    background: none;
  }

  .ant-segmented-group {
    gap: 20px;
  }

  .ant-segmented-item {
    background: none;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    padding: 8px 40px;
    border-radius: 90px;
  }

  .ant-segmented-item-label {
    color: var(--primary-color);
  }

  .ant-segmented-thumb {
    background-color: var(--primary-color) !important;
    border-radius: 90px;
  }

  .ant-segmented-item::after {
    border-radius: 90px;
  }

  .ant-segmented-item-selected {
    background-color: var(--primary-color);
    border-radius: 90px;
    color: var(--white-color) !important;
  }

  .ant-segmented-item-selected .ant-segmented-item-label {
    color: var(--white-color);
  }

  .ant-segmented-item-input {
    background-color: var(--primary-color);
  }

  /* Custom scrollbar */
  .ant-segmented::-webkit-scrollbar {
    height: 5px;
  }

  .ant-segmented::-webkit-scrollbar-track {
    background: var(--scrollbar-track-color);
    border-radius: 10px;
  }

  .ant-segmented::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb-color);
    border-radius: 10px;
  }

  .ant-segmented::-webkit-scrollbar-thumb:hover {
    background: var(--scrollbar-thumb-hover-color);
  }

  @media (max-width: 1200px) {
    .ant-segmented-item {
      padding: 5px 25px !important;
    }
    .ant-segmented-group {
      gap: 10px;
    }
  }

  @media (max-width: 920px) {
    .ant-segmented {
      width: 100% !important;
      overflow-x: auto;
      padding-bottom: 15px;
    }
    padding-top: 20px;
  }
`;
