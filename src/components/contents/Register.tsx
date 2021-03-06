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
          content="Cadastre colaboradores, turmas, alunos e demais dados da sua ecola para come??ar a usar a sua
          plataforma de comunica????o."
          content2="Clique nas setas abaixo para conhecer e escolher a op????o ideal para sua escola."
          image={image1}
          button=""
          link=""
          anime="fade"
        />
      )}          

      {completed && (
        <RegisterContent
          title="Voc?? j?? completou esse passo!"
          content="Voc?? j?? cadastrou dados da sua escola agora falta pouco para sua plataforma de comunica????o estar oficialmente
          pronta para uso. Continue seguindo para os pr??ximos passos ou cadastre mais dados na plataforma."
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
          content="Ideal para escolas com um grande n??mero de alunos, nosso importador de dados permite realizar, com total
          independ??ncia e seguran??a, o cadastro e a atualiza??ao em massa das principais informa????es da institui????o."
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
          content="Se sua escola ?? pequena e voc?? precisa fazer atualiza????es pequenas de dados, o cadastro manual ?? a melhor
          escolha para voc??. Cadastre manualmente as principais informa????es da sua institui????o na plataforma."
          content2=""
          image={image3}
          button="Cadastrar manualmente"
          link="Saiba mais sobre cadastros"
          anime="fade"
        />
      )}

      {!completed && selectedControl === 3 && (
        <RegisterContent
          title="Integra????o"
          content="Sua escola j?? possui um sistema de gest??o escolar? Por meio da integra????o podemos sincronizar as bases
          de dados da sua escola. Verifique com quais os sistemas de gest??o j?? estamos integrados e comece j??!"
          content2=""
          image={image4}
          button="Conhecer ERPs dispon??veis"
          link="Saiba mais sobre integra????o"
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