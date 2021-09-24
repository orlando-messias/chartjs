import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 678px;
  height: 139px;
  border-radius: 4px;
  border: 1px solid #EDEDED;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const MainTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin: 15px;
  width: 95%;
`;

export const ProgressBarContainer = styled.div`
  max-width: 640px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProgressBar = styled.div`
  width: 580px;
  height: 10px;
  background-color: #EDEDED;
  border-radius: 10px;
  margin-right: 10px;

  @media(max-width: 1176px) {
    width: 500px;
  }

  @media(max-width: 1056px) {
    width: 450px;
  }

  @media(max-width: 1008px) {
    width: 580px;
  }

  @media(max-width: 860px) {
    width: 500px;
  }
  
`;

export const Level = styled.div`
  width: 215px;
  height: 10px;
  background-color: #287D3C;
  border-radius: 10px;
  transition: 1s;
`;

export const Percentage = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const P = styled.p`
  font-size: 12px;
  font-weight: 400;
  max-width: 638px;
`;