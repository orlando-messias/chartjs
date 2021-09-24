
import image1 from '../../assets/try-the-platform.png';
import image2 from '../../assets/try-the-platform2.png';
import BaseComponent from './BaseComponent';

type tabState = {
  completed: boolean
};

const Experience = (tabItem: tabState) => {
  const title = "Experimente a Plataforma";
  const content = `Utilize nossa plataforma com dados fictícios para aprender como funciona o envio de comunicados, criação de eventos, 
    atendimento e muito mais. E não se preocupe, caso tenha dúvidas você pode acessar nossa base de conhecimento.`;
  const button = "Iniciar Tour";
  const link = "Acessar base de conhecimento";
  const contentWhenCompleted = `Parabéns, você já testou a aplicação com dados fictícios! Continue a aproveitar o máximo da sua plataforma
  de comunicação seguindo para os próximos passos!`
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

export default Experience;