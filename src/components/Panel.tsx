import React, {useState} from 'react';
import styled from 'styled-components';
import Experience from './contents/Experience';
import Family from './contents/Family';
import Register from './contents/Register';
import Start from './contents/Start';
import Team from './contents/Team';
import Tab from './Tab';
import App from './contents/App';

const MainDiv = styled.div`
  max-width: 1099px;
  height: 528px;
  border-radius: 8px;
  background-color: #FFFFFF;
  margin: 30px 0 0 10px;
`;

const Title = styled.div`
  font-family: 'Poppins';
  color: '#333333';
  font-weight: 600;
  font-size: 16px;
  padding: 16px;
`;

const Line = styled.div`
  background-color: #FFFFFF;
  height: 2px;
`;

const MainContainer = styled.div`
  display: flex;
`;


const Panel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [completedIndexes] = useState(new Set<number>([0]));

  const tabs = [
    {id: 0, text: 'Experimente a plataforma'},
    {id: 1, text: 'Comece a usar na sua escola'},
    {id: 2, text: 'Cadastre dados da escola'},
    {id: 3, text: 'Comunique a novidade para a equipe'},
    {id: 4, text: 'Convide famílias e estudantes para começar a usar'},
    {id: 5, text: 'Conheça nosso aplicativo'}
  ];

  const handleClick = (id: number) => {
    const completed = completedIndexes.has(id);
    if (id > selectedIndex + 1 && !completed) return;
    setSelectedIndex(id);
    completedIndexes.add(id);
  };

  return(
    <MainDiv>
      <Title>Confira as primeiras dicas para começar a usar!</Title>
      <Line />
      <MainContainer>
        <div>
          {tabs.map(({ id, text }) => (
            <Tab
              tabTitle={text}
              selected={selectedIndex === id} 
              onClick={() => handleClick(id)}
              completed={completedIndexes.has(id + 1)}
            />
          ))}
        </div>
        <div style={{padding: '36px'}}>
          {selectedIndex === 0 && <Experience completed={completedIndexes.has(1)} />}
          {selectedIndex === 1 && <Start completed={completedIndexes.has(2)} />}
          {selectedIndex === 2 && <Register completed={completedIndexes.has(3)} />}
          {selectedIndex === 3 && <Team completed={completedIndexes.has(4)} />}
          {selectedIndex === 4 && <Family completed={completedIndexes.has(5)} />}
          {selectedIndex === 5 && <App />}
        </div>
      </MainContainer>
    </MainDiv>
  );
};

export default Panel;