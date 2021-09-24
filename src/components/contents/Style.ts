
import styled from 'styled-components';

export const Title = styled.p`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 16px;
  `;

export const Content = styled.p`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  max-width: 410px;
  line-height: 24px;

  @media(max-width: 860px) {
    font-size: 13px;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 170px;
  margin-left: 10px;

   @media (max-width: 1220px) {
    width: 150px;
    height: 130px;
    margin-top: 20px;
  }

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const Button = styled.div`
  width: 123px;
  height: 36px;
  border-radius: 4px;
  background-color: #0F3670;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Poppins';
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 18px 0 0 2px;
  cursor: pointer;

  &:hover{
    background-color: #4B6894;
  }
`;

export const WiderButton = styled(Button)`
  width: 276px;
  /* position: absolute; */
`;

export const Link = styled(Content)`
   font-weight: 900;
   color: #0052CC;
   cursor: pointer;
   margin-top: 24px;

   &:hover{
     text-decoration: underline;
   }

   @media(max-width: 950px) {
     font-size: 12px;
   }
`;

export const AbsoluteLink = styled(Link)`
  /* position: absolute; */
  /* margin: 80px 0 0 4px; */
`;

export const AnimeDivFade = styled.div`
animation: fade 1.2s;
`;

export const AnimeDivSlide = styled.div`
animation: slide 1s;
`;