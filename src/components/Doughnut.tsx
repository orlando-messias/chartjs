import React from 'react';

import { Doughnut } from 'react-chartjs-2';
import { MainContainer, P, TitleP, PDiv } from './DoughnutStyles';

const DoughnutChart = () => {
  return (
    <MainContainer>
      <PDiv>
        <P>Adesão</P>
        <TitleP>Famílias</TitleP>
      </PDiv>
      <div style={{width: '100px', marginTop: '-5px'}}>
      <Doughnut
        data={{
          datasets: [
            {
              data: [25, 65],
              backgroundColor: ['#D56C47', 'gainsboro'],
              
            }
          ],
        }}
        options={{
          cutout: '70%',
        }}
      />


      </div>
    </MainContainer>
  );
};

export default DoughnutChart;