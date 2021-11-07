import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const ProjectsContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;

  @media screen and (max-width: 1000px) {
    height: 1200px;
  }

  @media screen and (max-width: 768px) {
    height: 1800px;
  }

  @media screen and (max-width: 480px){
    height: 1800px;
  }
`;


export const ProjectsWrapper = styled.div`

  display: grid;

`;

export const InnerWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(3, 1fr);
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
  grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
  padding: 0 20px;
}
`;

export const ProjectsCardWrap = styled(LinkR)`
  background-color: transparent;
  text-decoration: none;
  color: #010606;
`;

export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 64px;
  text-transform: uppercase;
  font-family: 'Nanum Gothic Coding', monospace;

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ProjectsBtnWrapper = styled.div`
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
