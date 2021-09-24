import { useState } from 'react';

import styled from 'styled-components';
import { Title, Content, Image, Button, AnimeDivFade, AnimeDivSlide } from './Style';
import './Anime.css';

import image1 from '../../assets/register.png';
import image2 from '../../assets/register2.png';
import image3 from '../../assets/register3.png';
import image4 from '../../assets/register4.png';
import image5 from '../../assets/register5.png';
import leftArrow from '../../assets/left-arrow.png';
import rightArrow from '../../assets/right-arrow.png';
import activeCircle from '../../assets/active-circle.png';
import inactiveCircle from '../../assets/inactive-circle.png';
import RegisterContent from './RegisterContent';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
`;


const Content2 = styled(Content)`
  line-height: 20px;
`;

const WiderButton = styled(Button)`
  width: 236px;
  position: absolute;

`;

const Link = styled(Content2)`
   font-weight: 900;
   color: #0052CC;
   cursor: pointer;
   position: absolute;
   margin: 80px 0 0 4px;

   &:hover{
     text-decoration: underline;
   }
`;

const ActiveCircle = styled.img`
  margin-right: 12px;
`;

const InactiveCircle = styled.img`
  margin-right: 12px;
`;

const Arrow = styled.img`
  cursor: pointer;
  padding: 12px;
  border-radius: 4px;

  &:hover{
    background-color: #DEEBFF;
  }
`;


type tabState = {
  title: string,
  content: string,
  content2: string,
  image: string,
  button: string,
  link: string,
  anime: string,
  isCompleted: boolean,
  selectedControl: number
};

const RegisterTest = (tabItem: tabState) => {

  const { title, content, content2, image, button, link, anime, isCompleted, selectedControl } = tabItem;

  return(
    <div>

      {!isCompleted && selectedControl === 0 && (
        <RegisterContent
          title={title}
          content={content}
          content2={content2}
          image={image}
          button={button}
          link={link}
          anime={anime}
        />
      )}          

      {isCompleted && (
        <RegisterContent
          title={title}
          content={content}
          content2={content2}
          image={image}
          button={button}
          link={link}
          anime={anime}
        />
      )}

      {!isCompleted && selectedControl === 1 && (
        <RegisterContent
          title={title}
          content={content}
          content2={content2}
          image={image}
          button={button}
          link={link}
          anime={anime}
        />
      )}
          
      {!isCompleted && selectedControl === 2 && (
        <RegisterContent
          title={title}
          content={content}
          content2={content2}
          image={image}
          button={button}
          link={link}
          anime={anime}
        />
      )}

      {!isCompleted && selectedControl === 3 && (
        <RegisterContent
          title={title}
          content={content}
          content2={content2}
          image={image}
          button={button}
          link={link}
          anime={anime}
        />
      )}

    </div>
  )
};

export default RegisterTest;