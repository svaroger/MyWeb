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
} from './InfoElements'

const ProjectInfo = ({
  id,
  img,
  section,
  name,
  description,
  technologyStack,
  projectTime,
  myRole,
  status,
  link
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
                <TopLine >{name}</TopLine>
                <Heading >Section:</Heading>
                <Subtitle >{section}</Subtitle>
                <Heading >Description:</Heading>
                <Subtitle >{description}</Subtitle>
                <Heading >Technology Stack:</Heading>
                <SubtitleList >{technologyStack}</SubtitleList>
                <Heading >Project time:</Heading>
                <Subtitle >{projectTime}</Subtitle>
                <Heading >My role:</Heading>
                <Subtitle >{myRole}</Subtitle>
                <Heading >Status:</Heading>
                <Subtitle >{status}</Subtitle>
                <Heading >Link:</Heading>
                <Subtitle >{link}</Subtitle>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )

}

export default ProjectInfo
