import { useEffect, useState } from 'react';

import { Doughnut, Pie } from 'react-chartjs-2';
import { 
  MainContainer,
  MainTitle,
  TitleContainer,
  Subtitle,
  ChartContainer,
  PercentageContainer
} from './ChartStyles';

import usersApi from '../services/UsersAPI';

type chartProps = {
  profile: string,
  color: string,
  type: string
}

const Chart = (chart: chartProps) => {
  const [percentageByProfile, setPercentageByProfile] = useState(0);

  const { profile, color, type } = chart;
  const profileName = `${profile[0].toUpperCase()}${profile.substr(1)}s`;

  useEffect(() => {
    usersApi.post('/', { name: profile })
      .then(response => setPercentageByProfile(response.data));
  });

  const getPercentage = () => `${Math.floor(percentageByProfile * 100)}%`;

  const data = {
    datasets: [
      {
        data: [percentageByProfile * 100, 100 - percentageByProfile],
        backgroundColor: [`#${color}`, 'gainsboro']
      }
    ],
  };

  const options = { cutout: '70%' };


  return (
    <MainContainer>
      <TitleContainer>
        <Subtitle>Adesão</Subtitle>
        <MainTitle>{profileName}</MainTitle>
      </TitleContainer>

      <ChartContainer>
        <PercentageContainer>
          {getPercentage()}
        </PercentageContainer>

        {type === 'Doughnut' && 
          <Doughnut
            data={data}
            options={options}
          />
        }
      
        {type === 'Pie' && 
          <Pie
            data={data}
          />
        }

      </ChartContainer>
    </MainContainer>
  );
};

export default Chart;