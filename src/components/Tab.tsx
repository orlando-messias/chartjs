import styled from 'styled-components';
import './Tab.css';
import checked from '../assets/selected.png';
import locker from '../assets/locker.png';

const MainDiv = styled.div`
  height: 74px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #F6F6F6;
  width: 346px;
  border-bottom: 0.5px solid #E5E5E5;

  @media (max-width: 1160px) {
    width: 280px;
  }
  
  @media (max-width: 860px) {
    width: 250px;
  }
`;

const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background-color: #EDEDED;
  margin: 10px;
  border: 1px solid #EDEDED;
  border: 1px solid #0747A6;

  @media(max-width: 1160px) {
    width: 18px;
    height: 15px;
  }
`;

const Checked = styled.img`
  width: 18px;
  height: 18px;
  margin: 10px;
`;

const Locker = styled.img`
  width: 18px;
  height: 18px;
  margin: 10px;
`;

const ActualCircle = styled(Circle)`
  border: 1px solid #0747A6;
`;

const TabContent = styled.div`
  width: 260px;
  font-size: 14px;
  margin: 10px;
  font-family: 'Poppins';
  font-weight: 500;

  @media (max-width: 860px) {
    font-size: 12px;
  }
`;

type tab = {
  tabTitle: string,
  selected: boolean,
  onClick?: () => void,
  completed?: boolean
};

const Tab = (tabItem: tab) => {
  const {tabTitle, selected, onClick, completed } = tabItem;

  const renderTabIcon = () => {
    if (selected && completed) return <Checked src={checked} />
    if (selected && !completed) return <ActualCircle />
    if (!selected && completed) return <Checked src={checked} />
    if (!selected && !completed) return <Locker src={locker} />
  }

  return(
    <MainDiv className={selected ? 'selected' : ''} onClick={onClick}>
      {renderTabIcon()}
      <TabContent>{tabTitle}</TabContent>
    </MainDiv>
  );
};

export default Tab;
