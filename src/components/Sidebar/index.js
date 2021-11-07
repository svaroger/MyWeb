import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='projects' onClick={toggle}>Projects</SidebarLink>
          <SidebarLink to='articles' onClick={toggle}>Articles</SidebarLink>
          <SidebarLink to='contactme' onClick={toggle}>Contacts</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/aboutme'>My CV</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
