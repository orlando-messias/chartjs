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
  /* line-height: 20px; */
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

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;
  width: 100%;
`;

const ActiveCircle = styled.img`
  margin-right: 12px;

  @media (max-width: 900px) {
    margin-right: 8px;
    width: 8px;
  }
`;

const InactiveCircle = styled.img`
  margin-right: 12px;

  @media (max-width: 900px) {
    margin-right: 8px;
    width: 8px;
  }
`;

const Arrow = styled.img`
  cursor: pointer;
  padding: 12px;
  border-radius: 4px;

  &:hover{
    background-color: #DEEBFF;
  }

  @media (max-width: 900px) {
    width: 30px;
  }
`;


type tabState = {
  completed: boolean
};

const Register = (isCompleted: tabState) => {
  const [selectedControl, setSelectedControl] = useState(0);

  const { completed } = isCompleted;

  const items = [0, 1, 2, 3];

  const Previous = () => {
    if(selectedControl > 0)
      setSelectedControl(selectedControl - 1);
  };

  const Next = () => {
    if(selectedControl < 3)
      setSelectedControl(selectedControl + 1);
  };

  return(
    <MainDiv>

      {!completed && selectedControl === 0 && (
        <RegisterContent
          title="Saiba como cadastrar os dados da sua escola"
          content="Cadastre colaboradores, turmas, alunos e demais dados da sua ecola para começar a usar a sua
          plataforma de comunicação."
          content2="Clique nas setas abaixo para conhecer e escolher a opção ideal para sua escola."
          image={image1}
          button=""
          link=""
          anime="fade"
        />
      )}          

      {completed && (
        <RegisterContent
          title="Você já completou esse passo!"
          content="Você já cadastrou dados da sua escola agora falta pouco para sua plataforma de comunicação estar oficialmente
          pronta para uso. Continue seguindo para os próximos passos ou cadastre mais dados na plataforma."
          content2=""
          image={image5}
          button=""
          link=""
          anime="fade"
        />
      )}

      {!completed && selectedControl === 1 && (
        <RegisterContent
          title="Importador de dados"
          content="Ideal para escolas com um grande número de alunos, nosso importador de dados permite realizar, com total
          independência e segurança, o cadastro e a atualizaçao em massa das principais informações da instituição."
          content2=""
          image={image2}
          button="Importar dados"
          link="Acessar base de conhecimento"
          anime="fade"
        />
      )}
          
      {!completed && selectedControl === 2 && (
        <RegisterContent
          title="Cadastro manual"
          content="Se sua escola é pequena e você precisa fazer atualizações pequenas de dados, o cadastro manual é a melhor
          escolha para você. Cadastre manualmente as principais informações da sua instituição na plataforma."
          content2=""
          image={image3}
          button="Cadastrar manualmente"
          link="Saiba mais sobre cadastros"
          anime="fade"
        />
      )}

      {!completed && selectedControl === 3 && (
        <RegisterContent
          title="Integração"
          content="Sua escola já possui um sistema de gestão escolar? Por meio da integração podemos sincronizar as bases
          de dados da sua escola. Verifique com quais os sistemas de gestão já estamos integrados e comece já!"
          content2=""
          image={image4}
          button="Conhecer ERPs disponíveis"
          link="Saiba mais sobre integração"
          anime="slide"
        />
      )}

      {!completed && (
        <AnimeDivFade>
          <Controls>
            <Arrow src={leftArrow} onClick={() => Previous()} />
            <div>
              {items.map((_item, index) => (
                selectedControl === index ? 
                  <ActiveCircle src={activeCircle} /> 
                  : 
                  <InactiveCircle src={inactiveCircle}  />
              ))}
            </div>
            <Arrow src={rightArrow} onClick={() => Next()}/>
          </Controls>
        </AnimeDivFade>
      )}

    </MainDiv>
  )
};

export default Register;