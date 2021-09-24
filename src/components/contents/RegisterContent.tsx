
import styled from 'styled-components';
import { Title, Content, Button, Image, AnimeDivFade, AnimeDivSlide } from './Style';

const Container = styled.div`
  display: flex;
  height: 200px;
  /* background-color: blue; */
`;

const Content2 = styled(Content)`
  /* line-height: 20px; */
`;

const WiderButton = styled(Button)`
  width: 270px;
  position: absolute;
  margin-top: 0px;
`;

const Link = styled(Content2)`
   font-weight: 900;
   color: #0052CC;
   cursor: pointer;
   position: absolute;
   margin: 50px 0 0 4px;

   &:hover{
     text-decoration: underline;
   }

   @media(max-width: 950px) {
     font-size: 12px;
   }
`;


type register = {
  title: string,
  content: string,
  content2: string,
  image: string,
  button: string,
  link: string,
  anime: string
};

const RegisterContent = (registerComponent: register) => {
  const { title, content, content2, image, button, link, anime } = registerComponent;

  return(
    <div>
      {anime === "fade" ?
        <AnimeDivFade>
          <Container>
            <div>
              <Title>{title}</Title>
              <Content2>
                {content}
              </Content2>
              {content2 && 
                <Content2>
                  {content2}
                </Content2>
              }
            </div>
  
            <Image src={image} />
          </Container>
          <div>
            {button && <WiderButton>{button}</WiderButton>}
            {link && <Link>{link}</Link>}
          </div>
        </AnimeDivFade>

        :

        <AnimeDivSlide>
          <Container>
            <div>
              <Title>{title}</Title>
              <Content2>
                {content}
              </Content2>
              {content2 && 
                <Content2>
                  {content2}
                </Content2>
              }
            </div>
  
            <Image src={image} />
          </Container>

          {button && <WiderButton>{button}</WiderButton>}
          {link && <Link>{link}</Link>}
        </AnimeDivSlide>

      }
    </div>

  );
};

export default RegisterContent;