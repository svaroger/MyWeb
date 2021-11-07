import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  SubtitleList,
  ImgWrap,
  Img
} from './AboutElements'
import Contacts from '../Contacts'


const AboutMe = ({
  id,
  img,
  alt,
  name,
  line1,
  line2,
  line3,
  line4,
  line5,
  line8,
  line9,
  line10,
  line11,
  line12,
  line13,
  line14,
  line15,
  line16,
  line17,
  line18,
  line19,
  line20,
  line21,
  line22,
  line23,
  line24,
  line25,
  line26,
  line27,
  line28,
  line29,
  line30,
  line31,
  line32,
  line33,
  line34,
  line35,
  line36,
  line37,
  line38,
  line39,
}) => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <ImgWrap>
                <Img src={img} />
              </ImgWrap>
              <TextWrapper>
                <Heading  >{line1}</Heading>
                <Subtitle >{line2}</Subtitle>
                <Subtitle >{line3}</Subtitle>
                <Heading >{line4}</Heading>
                <SubtitleList >{line5}</SubtitleList>
                <Heading >{line8}</Heading>
                <TopLine >{line9}</TopLine>
                <Subtitle >{line10}</Subtitle>
                <TopLine >{line11}</TopLine>
                <Subtitle >{line12}</Subtitle>
                <TopLine >{line13}</TopLine>
                <Subtitle >{line14}</Subtitle>
                <TopLine >{line15}</TopLine>
                <Subtitle >{line16}</Subtitle>
                <TopLine >{line17}</TopLine>
                <Subtitle >{line18}</Subtitle>
                <Subtitle >{line19}</Subtitle>
                <SubtitleList >{line20}</SubtitleList>
                <SubtitleList >{line21}</SubtitleList>
                <SubtitleList >{line22}</SubtitleList>
                <SubtitleList >{line23}</SubtitleList >
                <TopLine >{line24}</TopLine>
                <Subtitle >{line25}</Subtitle>
                <TopLine  >{line26}</TopLine>
                <Subtitle>{line27}</Subtitle>
                <TopLine >{line28}</TopLine>
                <Subtitle >{line29}</Subtitle>
                <TopLine >{line30}</TopLine>
                <Subtitle >{line31}</Subtitle>
                <Subtitle >{line32}</Subtitle>
                <Heading >{line33}</Heading>
                <SubtitleList >{line34}</SubtitleList>
                <SubtitleList >{line35}</SubtitleList>
                <SubtitleList >{line36}</SubtitleList>
                <SubtitleList >{line37}</SubtitleList>
                <Heading >{line38}</Heading>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
        <Contacts />
      </InfoContainer>
    </>
  )
}

export default AboutMe
