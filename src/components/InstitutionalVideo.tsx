import { MainDiv, VideoDiv, Content, Title, P, Button } from "./InstitutionalVideoStyles";
import player from '../assets/player.png';

const InstitutionalVideo = () => {
  return (
    <MainDiv>
      <VideoDiv>
        <img src={player} alt="Player" />
      </VideoDiv>
      <Content>
        <Title>Conheça mais sobre o Escola APP!</Title>
        <P>
          Sua plataforma de comunicação na palma de sua mão. Conecte-se de forma simples e eficiente com toda a comunidade escolar,
          mantendo as famílias informadas sobre tudo o que acontece no dia-a-dia dos alunos.
        </P>
        <Button>Aprender a usar</Button>
      </Content>
    </MainDiv>
  )
};

export default InstitutionalVideo;