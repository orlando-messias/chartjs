import { useState } from 'react';
import styled from 'styled-components';

import leftArrow from '../assets/leftArrow.png';
import rightArrow from '../assets/rightArrow.png';

import carousel01 from '../assets/carousel01.png';
import carousel02 from '../assets/carousel02.png';
import carousel03 from '../assets/carousel03.png';

const MainDiv = styled.div`
  max-width: 350px;
  margin-top: 30px;
  margin-left: 15px;
  height: 371px;
  background-color: #FFFFFF;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  .imgSelected {
    opacity: 1;
  }

  .titleSelected {
    opacity: 1;
  }

  @media(max-width: 1008px) {
    margin-left: 0;
    width: 330px;
  }
  
  @media(max-width: 780px) {
    /* max-width: 350px; */
  }

`;

const Header = styled.div`
  box-sizing: border-box;
  height: 68px;
  width: 100%;
  border-bottom: 1px solid #3333331C;
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  text-align: left;
  padding: 10px 15px;

  @media(max-width: 1120px) {
    font-size: 14px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0 10px;
`;

const Content = styled.div`
  display: flex;
  height: 250px;
  width: 100%;
  justify-content: center;
`;

const Body = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LeftArrow = styled.img`
  align-self: center;
  cursor: pointer;
  padding: 12px;
  border-radius: 4px;

  &:hover{
    background-color: #DEEBFF;
  }

  @media(max-width: 1226px) {
    padding: 8px;
    margin-right: 5px;
  }
`;

const RightArrow = styled(LeftArrow)`

  @media(max-width: 1226px) {
    margin-right: 0;
    margin-left: 5px;
  }
`;

const ImgContainer = styled.div`
  width: 247px;
  height: 130px;
  position: relative;
  overflow: hidden;

  @media(max-width: 1226px) {
    width: 200px;
    height: 115px;
  }

  @media(max-width: 1120px) {
    width: 160px;
    height: 100px;
  }

  @media(max-width: 1008px) {
    width: 247px;
    height: 130px;
  }
`;

const EventDateContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  position: absolute;
  z-index: 500;
  top: 15px;
  left: 15px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px;
  box-sizing: border-box;
  opacity: 0;
  transition: 2.5s;

  @media(max-width: 1226px) {
    width: 34px;
    height: 34px;
  }

  @media(max-width: 1008px) {
    width: 38px;
    height: 38px;
  }
`;

const EventDateWeekDay = styled.span`
  font-size: 10px;
  font-weight: 600;
  margin-top: 3px;
`;

const EventDateDay = styled.span`
  font-size: 18px;
  color: #0747A6;
  font-weight: 600;
  margin-top: -5px;

  @media(max-width: 1120px) {
    font-size: 14px;
  }
`;

const ImgSlide = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  opacity: 0;
  transition: 2s;
`;

const TitleContainer = styled.div`
  font-size: 14px;
  width: 247px;
  height: 65px;
  font-weight: 400;
  padding: 10px 0px;
  border: 1px solid #EDEDED;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  position: relative;

  @media(max-width: 1226px) {
    width: 200px;
    height: 70px;
  }
  
  @media(max-width: 1120px) {
    width: 160px;
    height: 80px;
    font-size: 12px;
  }

  @media(max-width: 1008px) {
    width: 247px;
  }
`;

const Title = styled.span`
  opacity: 0;
  transition: 1.5s;
  position: absolute;
  left: 0;
  width: 100%;
  height: 55px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  background-color: #EDEDED;
  border-radius: 100%;
  margin-right: 8px;

  @media(max-width: 1120px) {
    width: 8px;
    height: 8px;
    font-size: 12px;
  }
`;

const ActiveCircle = styled(Circle)`
  background-color: #0747A6;
`;

function UpcomingEvents() {
  const [imgIndex, setImgIndex] = useState(0);

  const items = [
    { img: carousel01, title: 'Webinar - Como aumentar o engajamento de pais e alunos', day: '24/seg' },
    { img: carousel02, title: 'Meu segundo título', day: '11/qua' },
    { img: carousel03, title: 'Terceiro título aqui', day: '05/seg' },
  ];

  const Next = () => {
    if (imgIndex === items.length - 1) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
    }
  };

  const Previous = () => {
    if (imgIndex === 0) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex - 1);
    }
  };

  return (
    <MainDiv>
      <Header>
        <p>Upcoming Events</p>
      </Header>
      <Container>
        <Content>
          <LeftArrow src={leftArrow} onClick={Previous} />
          <Body>
            <ImgContainer>
              {items.map((item, index) => (
                <>
                  <EventDateContainer className={imgIndex === index ? 'imgSelected' : ''}>
                    <EventDateWeekDay>
                      {item.day.substr(3, 3)}
                    </EventDateWeekDay>
                    <EventDateDay>
                      {item.day.substr(0, 2)}
                    </EventDateDay>
                  </EventDateContainer>
                  <ImgSlide src={item.img} className={imgIndex === index ? 'imgSelected' : ''} />
                </>
              ))}
            </ImgContainer>
            <TitleContainer>
              {items.map((item, index) => (
                <Title className={imgIndex === index ? 'titleSelected' : ''}>{item.title}</Title>
              ))}
            </TitleContainer>
          </Body>
          <RightArrow src={rightArrow} onClick={() => Next()} />
        </Content>
        <Footer>
          {items.map((_item, index) => (
            imgIndex === index ? <ActiveCircle /> : <Circle />
          ))}
        </Footer>
      </Container>
    </MainDiv>
  );
}

export default UpcomingEvents;
