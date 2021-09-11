import React from 'react';

import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
  return (
    <div style={{width: '100px', display: 'flex', alignItems: 'center'}}>
      <div style={{position: 'absolute', left: '40px', fontSize: '12px', fontWeight: 'bold'}}>25%</div>
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
  );
};

export default DoughnutChart;