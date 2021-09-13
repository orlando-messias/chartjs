import Doughnut from '../components/Doughnut';
import AdesaoGeral from '../components/AdesaoGeral';
import { MainContainer, Title, TitleContainer, Subtitle } from './HomeStyles';

const Home = () => {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>Adesão de lançamento</Title>
        <Subtitle>Saiba mais sobre a adesão</Subtitle>
      </TitleContainer>

      <AdesaoGeral />

      <Doughnut />

    </MainContainer>
  );
};

export default Home;