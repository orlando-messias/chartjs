import { Link } from 'react-router-dom';
import { Chart, ChartDiv, Level, MainContainer, P, Percentage, Title } from './AdesaoGeralStyles';

const AdesaoGeral = () => {
  return (
    <MainContainer>
      <Title>Adesão geral</Title>
      <ChartDiv>
        <Chart>
          <Level />
        </Chart>
        <Percentage>37%</Percentage>
      </ChartDiv>
      <P>
        100 usuários nunca acessaram a plataforma. Para incentivar o uso você pode &nbsp;
        <Link to={'#'}>reenviar o e-mail de boas vindas.</Link>
      </P>
    </MainContainer>
  );
};

export default AdesaoGeral;