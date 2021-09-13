import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 678px;
  height: 139px;
  border-radius: 4px;
  border: 1px solid #EDEDED;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin: 15px;
  width: 95%;
`;

export const ChartDiv = styled.div`
  width: 640px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Chart = styled.div`
  width: 580px;
  height: 10px;
  background-color: #EDEDED;
  border-radius: 10px;
`;

export const Level = styled.div`
  width: 215px;
  height: 10px;
  background-color: #287D3C;
  border-radius: 10px;
  position: absolute;
`;

export const Percentage = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const P = styled.p`
  font-size: 12px;
  font-weight: 400;
  width: 638px;
`;