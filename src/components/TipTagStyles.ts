import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 95%;
  height: 36px;
  border: 1px solid #EDEDED;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #DEEBFF;
    color: #0747A6;
    border-color: #4575BC;
  }

  /* @media(max-width: 1268px) {
    width: 290px;
  }

  @media(max-width: 1250px) {
    width: 250px;
  } */
`;

export const Image = styled.img`
  margin-right: 10px;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
`;