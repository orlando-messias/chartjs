import image1 from '../../assets/team1.png';
import image2 from '../../assets/team2.png';
import BaseComponent from './BaseComponent';


type tabState = {
  completed: boolean
};

const Team = (tabItem: tabState) => {
  const title = "Compartilhe a novidade";
  const content = `Chegou a hora de convidar a equipe da escola para conhecer a plataforma de comunicação! Envie um
  comunicado convidando-os para realizar o primeiro acesso encaminhando o nosso guia de primeiros passos.`;
  const button = "Envie o comunicado de boas vindas";
  const link = "Acessar a base de conhecimento";
  const contentWhenCompleted = `Você já enviou o comunicado de boas-vindas para a equipe da escola, fique de olho no painel de adesão
  para acompanhar o uso da plataforma e continue a navegar pelos próximos passos.`
  const { completed } = tabItem;

  return(
    <BaseComponent
      title={title}
      content={content}
      image1={image1}
      image2={image2}
      button={button}
      link={link}
      contentWhenCompleted={contentWhenCompleted}
      completed={completed} 
    />
  );
};

export default Team;