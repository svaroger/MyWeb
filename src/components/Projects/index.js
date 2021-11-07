import React, { useState } from 'react';
import Icon1 from '../../images/bot2.svg';
import Icon2 from '../../images/blockchain2.svg';
import Icon3 from '../../images/mobile2.svg';
import Icon4 from '../../images/web2.svg';
import Icon5 from '../../images/dashboard2.svg';
import { RouteButton } from '../ButtonElements';
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCardWrap,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  ProjectsBtnWrapper,
  ArrowForward,
  ArrowRight,
  InnerWrapper
} from './ProjectsElements';


const Projects = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectsWrapper>
        <InnerWrapper>
          <ProjectsCardWrap to='/blockchain'>
            <ProjectsCard>
              <ProjectsIcon src={Icon2} />
              <ProjectsH2>Blockchain Solutions</ProjectsH2>
              <ProjectsP>Blockchain for business. Supply Chain, Blockchain ID</ProjectsP>
            </ProjectsCard>
          </ProjectsCardWrap>
          <ProjectsCardWrap to='/bots'>
            <ProjectsCard>
              <ProjectsIcon src={Icon1} />
              <ProjectsH2>Chat bots</ProjectsH2>
              <ProjectsP>Social-Media Bots for different tasks</ProjectsP>
            </ProjectsCard>
          </ProjectsCardWrap>
          <ProjectsCardWrap to='/mobile'>
            <ProjectsCard>
              <ProjectsIcon src={Icon3} />
              <ProjectsH2>Mobile Apps</ProjectsH2>
              <ProjectsP>Cross-platform Mobile Apps</ProjectsP>
            </ProjectsCard>
          </ProjectsCardWrap>
          <ProjectsCardWrap to='/web'>
            <ProjectsCard>
              <ProjectsIcon src={Icon4} />
              <ProjectsH2>Web Apps</ProjectsH2>
              <ProjectsP>Full stack web applications and websites</ProjectsP>
            </ProjectsCard>
          </ProjectsCardWrap>
          <ProjectsCardWrap to='/data'>
            <ProjectsCard>
              <ProjectsIcon src={Icon5} />
              <ProjectsH2>Data Management</ProjectsH2>
              <ProjectsP>Databases, Dashboards, Analitics, CRM, ERP</ProjectsP>
            </ProjectsCard>
          </ProjectsCardWrap>
        </InnerWrapper>
      </ProjectsWrapper>
      <ProjectsBtnWrapper>
        <RouteButton
          to='projects'
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary='true'
          dark='true'
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
        >
        All projects{hover ? <ArrowForward /> : <ArrowRight />}
        </RouteButton>
      </ProjectsBtnWrapper>
    </ProjectsContainer>
  )
}

export default Projects
