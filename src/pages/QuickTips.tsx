
import TipTag from '../components/TipTag';
import { MainContainer, MainTitleContainer, MainTitle } from './QuickTipsStyles';

import questionImg from '../assets/quick-tips/question.png';
import lightbulbImg from '../assets/quick-tips/lightbulb.png';
import videoImg from '../assets/quick-tips/video.png';
import contactusImg from '../assets/quick-tips/contact_us.png';

const QuickTips = () => {
  return (
    <MainContainer>
      
      <MainTitleContainer>
        <MainTitle>Dicas Rápidas</MainTitle>
      </MainTitleContainer>

      <TipTag image={questionImg} title='Como começar' />

      <TipTag image={lightbulbImg} title='Base de conhecimento' />
      
      <TipTag image={videoImg} title='Tutoriais em vídeo' />
      
      <TipTag image={contactusImg} title='Fale conosco' />

    </MainContainer>
  );
};

export default QuickTips;