import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  max-width: 1099px;
  min-height: 237px;
  border-radius: 8px;
  background-color: #FFFFFF;
  margin-left: 10px;

  @media (max-width: 1170px) {
    flex-direction: column;
    align-items: center;
    padding: 5px 0;
  }
  `;

export const VideoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  min-width: 421px;
  height: 280px;
  border-radius: 4px 0 0 4px;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }

  @media (max-width: 1170px) {
    div {
     display: block;
    }
  }
`;

export const Content = styled.div`
  background-color: #FFFFFF;
  padding: 5px 20px;
  border-radius: 0 8px 8px 0;
  max-width: 720px;

  @media (max-width: 1170px) {
    max-width: 100%;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
`;

export const P = styled.p`
  /* min-width: 640px; */
  font-size: 14px;
`;

export const Button = styled.div`
  width: 147px;
  height: 36px;
  border-radius: 4px;
  background-color: #FFFFFF;
  border: 1px solid #767676;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 20px;

  &:hover{
    background-color: #DAE3F2;
    color: #0747A6;
    border-color: #0747A6;
  }
`;