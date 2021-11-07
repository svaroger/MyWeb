import React from 'react';
import {
  ArticlesContainer,
  ArticlesCardWrap,
  Card,
  ArticlesH1,
  ArticlesH2,
  ArticlesP,
} from './ContactsElements';


const Contacts = () => {

  return (
    <ArticlesContainer>
          <ArticlesCardWrap>
            <Card>
              <ArticlesH1>Artem Grigorev</ArticlesH1>
              <ArticlesH2>Email:</ArticlesH2>
              <ArticlesP>artomeus@protonmail.com</ArticlesP>
              <ArticlesH2>Github:</ArticlesH2>
              <ArticlesP>https://github.com/svaroger</ArticlesP>
              <ArticlesH2>Telegram:</ArticlesH2>
              <ArticlesP>@Svaroger</ArticlesP>
            </Card>
          </ArticlesCardWrap>
    </ArticlesContainer>
  )
}

export default Contacts
