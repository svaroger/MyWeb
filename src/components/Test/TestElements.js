import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0px 0;

  }



`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 660px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 460px;
  }

  @media screen and (max-width: 480px) {
    height: 360px;
  }

`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-colums: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col2 col1';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col2 col2' 'col1 col1';
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;



//???
export const TextWrapper = styled.div`

  padding-top: 0;
  padding-bottom: 10px;
`;

export const TopLine = styled.p`
  color: #31bfff;
  font-size: 32px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 4px;

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;
