import SideBar from '../components/SideBar';
import InstitutionalVideo from '../components/InstitutionalVideo';
import { Container, Header, HeaderDetail, MainContainer, Content, SideBarContainer, LeftSidebar, ContentInColumns } from './OnboardingStyles';

import icon from '../assets/icon.png'
import Panel from '../components/Panel';
import Home from './Home';
import QuickTips from './QuickTips';
import UpcomingEvents from '../components/UpcomingEvents';
import Feeds from './Feeds';

import home from '../assets/icons/home.png';
import news from '../assets/icons/news.png';
import calendar from '../assets/icons/calendar.png';
import dolar from '../assets/icons/dolar.png';
import file from '../assets/icons/file.png';
import clock from '../assets/icons/clock.png';
import user from '../assets/icons/user.png';

type iteArray = {
  image: string,
  title: string
}[]

const Onboarding = () => {

  return (
    <MainContainer>
      <Header>
        <HeaderDetail>
          <img src={icon} alt="" />
        </HeaderDetail>
        <div style={{display: 'flex', alignItems: 'center', marginRight: '20px'}}>
          <img src={user} alt="" style={{marginRight: '10px', width: '40px', height: '40px'}} />
          <span style={{color: 'white', fontSize: '12px'}}>User</span>
        </div>
      </Header>
      <Container>
        <SideBarContainer>
          <SideBar items={[
            {image: home, title: 'Início'},
            {image: news, title: 'Últimas notícias'},
            {image: calendar, title: 'Minha agenda'},
            {image: dolar, title: 'Meus pagamentos'},
            {image: file, title: 'Meus contratos'}
            ]} />

          <SideBar items={[
            {image: clock, title: 'Aguard. aprovação'},
            {image: dolar, title: 'Pagamentos'},
            {image: file, title: 'Contratos'},
            ]} />
        </SideBarContainer>
        <Content>
          <InstitutionalVideo />

          <Panel />

          <ContentInColumns>
            <Home />

            <LeftSidebar>
              <UpcomingEvents />                      
              <QuickTips />
            </LeftSidebar>
            

          </ContentInColumns>
          <Feeds />
        </Content>
      
      </Container>

    </MainContainer>
  );
};

export default Onboarding;