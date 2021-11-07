import styled from 'styled-components';

export const ArticlesContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 40px;
  border-radius: 10px;
  /* padding-bottom: 60px;
  padding-right: 60px;
  padding-left: 60px; */

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;


export const ArticlesCardWrap = styled.div`
  background-color: transparent;
  text-decoration: none;
  color: #010606;
`;

export const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

`;


export const ArticlesH1 = styled.h1`
  font-size: 20px;
  margin-bottom: 5px;

  @media screen and (max-width: 480px){
    font-size: 1rem;
  }
`;

export const ArticlesH2 = styled.h2`
  font-size: 1rem;
`;

export const ArticlesP = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 6px;
`;
