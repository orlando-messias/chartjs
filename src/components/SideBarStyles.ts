import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 200px;
  min-height: 100px;
  background-color: #FFFFFF;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 10px;

  @media(max-width: 940px) {
    width: 80px;
    align-items: center;
  }

  @media(max-width: 860px) {
    /* width: 60px; */
  }
`;

export const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    font-weight: 500;
  }
`;

export const Span = styled.span`
  font-size: 14px;
  color: #676767;

  @media(max-width: 940px) {
    display: none;
  }
`;

