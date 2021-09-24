import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MainContainer,
  ProgressBarContainer,
  ProgressBar,
  Level,
  P,
  Percentage,
  MainTitle } from './GeneralAdmissionStyles';

import usersApi from '../services/UsersAPI';

type AdmissionoProps = {
  profile: string
}

const GeneralAdmission = (adesao: AdmissionoProps) => {
  const [total, setTotal] = useState(0);

  const { profile } = adesao;

  useEffect(() => {
    usersApi.post('/', { name: profile })
      .then(response => setTotal(response.data));
  });

  return (
    <MainContainer>
      <MainTitle>Adesão geral</MainTitle>
      <ProgressBarContainer>
        <ProgressBar>
          <Level style={{width: `${total * 10}px`}} />
        </ProgressBar>
        <Percentage>{Math.floor(total * 10 / 580 * 100)}%</Percentage>
      </ProgressBarContainer>
      <P>
        100 usuários nunca acessaram a plataforma. Para incentivar o uso você pode &nbsp;
        <Link to={'#'}>reenviar o e-mail de boas vindas.</Link>
      </P>
    </MainContainer>
  );
};

export default GeneralAdmission;