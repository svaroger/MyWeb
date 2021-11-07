import React, { useEffect  } from 'react';
import { useLocation } from "react-router-dom";
import AboutMe from '../../content/AboutContent'
import NavbarContent from '../../content/NavbarContent';
import { aboutMeData } from '../../content/AboutContent/Data';



const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <NavbarContent />
      <AboutMe {...aboutMeData}/>
    </>
  )
}

export default About
