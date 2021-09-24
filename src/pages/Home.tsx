import Chart from '../components/Chart';
import AdesaoGeral from '../components/GeneralAdmission';
import { MainContainer, MainTitle, TitleContainer, Subtitle, ChartContainer } from './HomeStyles';

import image from '../assets/link.png';

const Home = () => {

  return (
    <MainContainer>
      <TitleContainer>
        <MainTitle>Adesão de lançamento</MainTitle>
        <Subtitle>Saiba mais sobre a adesão &nbsp; <img src={image} alt="" /></Subtitle>
      </TitleContainer>

      <AdesaoGeral profile='total'/>

      <ChartContainer>
        <Chart profile='familia' color='D56C47' type='Doughnut' />

        <Chart profile='equipe' color='F3CB51' type='Doughnut' />

        <Chart profile='estudante' color='70B865' type='Doughnut' />
      </ChartContainer>

    </MainContainer>
  );
};

export default Home;