import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 329px;
  height: 131px;
  display: flex;
  justify-content: space-between;
  margin: 20px;
  border: 1px solid #EDEDED;
  border-radius: 4px;
  padding: 15px;
`;

export const PDiv = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  flex-direction: column;
`;

export const P = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

export const TitleP = styled(P)`
  font-size: 14px;
`;