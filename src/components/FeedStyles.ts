import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 700px;
  height: 100px;
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const VideoContainer = styled.div`
  width: 160px;
  height: 90px;
  border-radius: 8px;
  border: 1px solid gainsboro;
  position: relative;
  overflow: hidden;
  margin-right: 10px;
`;

export const IFrame = styled.iframe`
  position: absolute;
  width: 102%;
  height: 100%;
  border: none;
`;

export const Content = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #515151;
`;

export const Title = styled.div`
  width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: 500;
  margin-top: 3px;
  color: #333333;

  @media(max-width: 820px) {
    font-size: 13px;
  }
`;
export const P = styled.div`
  width: 98%;
  height: 35px;
  font-size: 12px;
  font-weight: 400;
  /* border: 1px solid black; */
`;

export const Link = styled.p`
  color: #0052CC;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  padding: 0;
  margin: 0;
  cursor: pointer;

  @media(max-width: 820px) {
    margin-top: 15px;
  }
`;