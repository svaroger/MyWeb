import React from 'react';
import Contacts from '../../content/Contacts';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine
} from './ContactMeElements'

const ContactMe = () => {
  return (
    <>
      <InfoContainer id='contactme'>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>My Contacts:</TopLine>
              </TextWrapper>
              <Contacts />
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )

}

export default ContactMe
