import React, { useState, useEffect } from 'react';
import { animateScroll as scroll} from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo
} from './NavbarElements'

const NavbarContent = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const  toggleHome = () => {
    scroll.scrollToTop()
  };

  return (
    <>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>Artomeus</NavLogo>
          </NavbarContainer>
        </Nav>
    </>
  )

}

export default NavbarContent
