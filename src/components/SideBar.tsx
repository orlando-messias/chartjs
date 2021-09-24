
import { Container, MainContainer, Span } from './SideBarStyles';

import home from '../assets/icons/home.png';
import news from '../assets/icons/news.png';
import calendar from '../assets/icons/calendar.png';
import dolar from '../assets/icons/dolar.png';
import file from '../assets/icons/file.png';

interface SideBarProps {
  items: {image: string, title: string}[]
}

const SideBar = ({items}: SideBarProps) => {
  return (
    <MainContainer>
      {items.map(i => (
        <Container>
          <img src={i.image} alt="" style={{width: '20px', marginRight: '10px'}} />
          <Span>{i.title}</Span>
        </Container>
      ))}
      {/* <Container>
        <img src={news} alt="" style={{width: '20px', marginRight: '10px'}} />
        <Span>Últimas notícias</Span>
      </Container>
      <Container>
        <img src={calendar} alt="" style={{width: '20px', marginRight: '10px'}} />
        <Span>Minha agenda</Span>
      </Container>
      <Container>
        <img src={dolar} alt="" style={{width: '20px', marginRight: '10px'}} />
        <Span>Meus pagamentos</Span>
      </Container>
      <Container>
        <img src={file} alt="" style={{width: '20px', marginRight: '10px'}} />
        <Span>Meus contratos</Span>
      </Container> */}
    </MainContainer>
  );
};

export default SideBar;