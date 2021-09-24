import styled from 'styled-components';

export const MainContainer = styled.div`
  margin-top: 20px;
  margin-left: 15px;
  max-width: 350px;
  height: 312px;
  background-color: #FFFFFF;
  border-radius: 8px;
  display: flex;
  flex-direction: 'column';
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-items: flex-start;

  @media(max-width: 1008px) {
    margin-top: 30px;
  }
`;

export const MainTitleContainer = styled.div`
  width: 100%;
  height: 68px;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #3333331C;
`;

export const MainTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const Label = styled.div`
  width: 6px;
  height: 36px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: #0747A6;
  margin-right: 10px;
`;

