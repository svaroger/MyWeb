import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom'

export const Button = styled(LinkS)`
  border-radius: 40px;
  background: ${({ primary }) => (primary ? '#31bfff' : '#010606' )};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-family: 'Nanum Gothic Coding', monospace;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#31bfff')};
  }
`;


export const RouteButton = styled(LinkR)`
border-radius: 40px;
background: ${({ primary }) => (primary ? '#31bfff' : '#010606' )};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#010606' : '#fff')};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration: none;
font-family: 'Nanum Gothic Coding', monospace;

&:hover {
  transition: all 0.2s ease-in-out;
  background: ${({ primary }) => (primary ? '#fff' : '#31bfff')};
}
`;
