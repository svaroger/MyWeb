import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-colums: minmax(auto, 1fr);
  align-items: center;

`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const TextWrapper = styled.div`
  max-width: 740px;
  padding-top: 0;
  padding-bottom: 20px;
`;

export const TopLine = styled.p`
  color: #31bfff;
  font-size: 26px;
  line-height: 36px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 8px;
  color: #fffff;
  font-size: 22px;
  line-height: 1.1;
  font-weight: 600;


  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.p`
  max-width: 740px;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 24px;
  color: #fffff;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const SubtitleList = styled.p`
  max-width: 740px;
  margin-bottom: 25px;
  margin-left: 25px;
  font-size: 18px;
  line-height: 24px;
  color: #fffff;

`;


export const ImgWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 64px;
  max-width: 250px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin:  0 0 10px 0;
  padding-right: 0;

`;
