import styled from 'styled-components';

import image1 from '../../assets/cellphone.png';
import image2 from '../../assets/store.png';

const Title = styled.p`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 16px;
`;

const Content = styled.p`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  max-width: 410px;
  line-height: 20px;
`;

const Image1 = styled.img`
  max-width: 180px;
  margin-left: 30px;

  @media (max-width: 1080px) {
    width: 150px;
    height: 150px;
    margin-top: 70px;
  }
`;

const Image2 = styled.img`
  cursor: pointer;
  width: 200px;
`;

const Footer = styled.div`
  margin-top: 30px;
`;

const Link = styled(Content)`
   font-weight: 900;
   color: #0052CC;
   cursor: pointer;
   position: relative;
   /* margin: 80px 0 0 4px; */

   &:hover{
     text-decoration: underline;
   }

   @media(max-width: 950px) {
     font-size: 12px;
   }
`;


const App = () => {

  return(
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex'}}>
          <div>
            <Title>Conheça o Escola App para colaboradores</Title>
            <Content>
              Agora você pode ter a plataforma de relacionamento da sua escola na palma da sua mão! Com o novo Escola App
              para colaboradores você tem a tecnologia que precisa para usar o máximo do potencial da sua agenda digital!
            </Content>
          </div>

          <Image1 src={image1} />
        </div>

        <Footer>
          <Image2 src={image2} />
          <Link>Assista ao vídeo de apresentação</Link>
        </Footer>
      </div>

    </div>
  )
};

export default App;