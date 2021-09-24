import image1 from '../../assets/family1.png';
import image2 from '../../assets/family2.png';
import BaseComponent from './BaseComponent';


type tabState = {
  completed: boolean
};

const Family = (tabItem: tabState) => {
  const title = "Convide famílias e estudantes";
  const content = `Agora é a hora de comunicar às famílias e estudantes sobre a nova plataforma de comunicação da sua escola!<br></br>
  Clique no botão abaixo para enviar o convite, lembre-se de que as famílias e estudantes só terão acesso à
  plataforma após o envio.`;
  const button = "Enviar convite";
  const link = "Acessar material de divulgação";
  const contentWhenCompleted = `Você já enviou o comunicado de boas-vindas para estudantes e famílias, fique de olho no painel de adesão
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

export default Family;