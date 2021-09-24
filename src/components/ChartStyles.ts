import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 328px;
  height: 131px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  border: 1px solid #EDEDED;
  border-radius: 4px;
  padding: 10px;

`;

export const TitleContainer = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  flex-direction: column;
`;

export const MainTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

export const Subtitle = styled(MainTitle)`
  font-size: 12px;
`;


export const ChartContainer = styled.div`
  width: 120px;
  margin-top: -5px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const PercentageContainer = styled.div`
  position: absolute;
  font-weight: 600;
`;