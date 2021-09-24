import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 719px;
  height: 458px;
  border-radius: 8px;
  background-color: #FFFFFF;
  margin: 30px 12px;
  padding: 10px;

  @media(max-width: 1008px) {
    margin-left: 26px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #3333331C;
  `;

export const MainTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  padding: 0 16px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  padding: 0 16px;
`;