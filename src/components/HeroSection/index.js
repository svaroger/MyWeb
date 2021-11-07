import React, { useState } from 'react';
import Video from '../../videos/video3.mp4';
import { Button } from '../ButtonElements';
import Bot from '../../images/bot.svg';
import Mobile from '../../images/mobile.svg';
import Web from '../../images/web.svg';
import Dashboard from '../../images/dashboard.svg';
import Blockchain from '../../images/blockchain.svg';
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroIconsContainer,
  InnerWrapper,
  SphereCard,
  SphereIcon
} from './HeroElements';
import './HeroVideo.css';

// const heroBg = {
//   width: "100%",
//   height: "100%",
//   position: "absolute",
//   top: 0,
//   right: 0,
//   bottom: 0,
//   left: 0,
//   overflow: "hidden",
// };

// const videoBg = {
//   width: "100%",
//   height: "100%",
//   object-position: "50% 50%",
//   background: "#232233",
// };

// <video style={heroBg} autoplay="autoplay" playsinline="" muted="muted" loop="loop" id="video-background">
//     <source style={heroBg} src={Video} type='video/mp4' />
// </video>

// <HeroBg>
//   <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
// </HeroBg>


const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
    <div className="Bg">
    <video className="Video" autoplay="autoplay" playsinline="" muted="muted" loop="loop" id="video-background">
        <source src={Video} type='video/mp4' />
    </video>
    </div>
      <HeroContent>
        <HeroH1>Hello.</HeroH1>
        <HeroP>My name is Artem and I'm Full Stack Developer.<br /> This is my page.
        </HeroP>
        <HeroBtnWrapper>
          <Button
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
          My Projects{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
        <HeroIconsContainer>
          <InnerWrapper>
            <SphereCard>
              <SphereIcon src={Bot} />
            </SphereCard>
            <SphereCard>
              <SphereIcon src={Mobile} />
            </SphereCard>
            <SphereCard>
            <SphereIcon src={Blockchain} />
            </SphereCard>
            <SphereCard>
              <SphereIcon src={Web} />
            </SphereCard>
            <SphereCard>
              <SphereIcon src={Dashboard} />
            </SphereCard>
          </InnerWrapper>
        </HeroIconsContainer>
      </HeroContent>
    </HeroContainer>

  )

}

export default HeroSection
