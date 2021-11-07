import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  FaGithub,
  FaTelegram,
  FaInstagram,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  WebsiteRights
} from './FooterElements'

const Footer = () => {
  const  toggleHome = () => {
    scroll.scrollToTop()
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Projects</FooterLinkTitle>
              <FooterLink to="projects">Blockchain</FooterLink>
              <FooterLink to="projects">Mobile Apps</FooterLink>
              <FooterLink to="projects">Web Apps</FooterLink>
              <FooterLink to="projects">Chat Bots</FooterLink>
              <FooterLink to="projects">Data Management</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Content</FooterLinkTitle>
              <FooterLink to="about">About</FooterLink>
              <FooterLink to="projects">My projects</FooterLink>
              <FooterLink to="articles">My articles</FooterLink>
              <FooterLink to="contact me">Contacts</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contacts</FooterLinkTitle>
              <FooterLink to="/signin">Artem Grigoryev</FooterLink>
              <FooterLink to="/signin">e-mail:</FooterLink>
              <FooterLink>artomeus@protonmail.com</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Artomeus
            </SocialLogo>
            <WebsiteRights> © {new Date().getFullYear()} All rights reserved.<br /> Created by Artomeus.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://github.com/svaroger" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="https://t.me/svaroger" target="_blank" aria-label="Telegram">
                <FaTelegram />
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/artomeus/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
