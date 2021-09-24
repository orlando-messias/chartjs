import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 1366px;
  border-radius: 2px;
  background-color: #eeeff0;
  margin: 10px auto;

  @media (max-width: 1170px) {
    min-height: 1200px;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 45px;
  background-color: #0F3670;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderDetail = styled.div`
  width: 200px;
  height: 45px;
  background-color: #FFFFFF;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const SideBarContainer = styled.div`
  width: 205px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
`;

export const Content = styled.div`
  width: 1100px;
  border-radius: 4px;

  @media(max-width: 940px) {
    width: 1400px;
  }
  
  @media(max-width: 860px) {
    width: 1600px;
  }
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
`;

export const ContentInColumns = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px;
  max-width: 1100px;
  margin-left: 10px;

  @media(max-width: 1008px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftSidebar = styled.div`
  
  @media(max-width: 1008px) {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
`;



