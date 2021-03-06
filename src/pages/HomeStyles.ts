import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 719px;
  min-height: 557px;
  border-radius: 8px;
  background-color: #FFFFFF;
  margin-top: 30px;
  padding: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media(max-width: 1318px) {
    justify-content: center;
  }

  @media(max-width: 860px) {
    flex-direction: column;
    align-items: center;
  }
`;

