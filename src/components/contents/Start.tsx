
import image1 from '../../assets/start.png';
import image2 from '../../assets/start2.png';
import BaseComponent from './BaseComponent';

type tabState = {
  completed: boolean
};

const Start = (tabItem: tabState) => {
  const title = "Utilize a plataforma oficial";
  const content = `Comece a cadastrar os dados da sua escola como turmas, alunos, colaboradores.
  Para dar início ao cadastro, basta clicar no botão abaixo.`;
  const button = "Sair do modo demonstração";
  const link = "";
  const contentWhenCompleted = `Você já está utilizando a sua plataforma de comunicação com os dados oficiais da sua escola.
  Continue seguindo para os próximos passos!`
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

export default Start;