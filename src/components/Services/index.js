import React from 'react';
import Icon1 from '../../images/data1.svg';
import Icon2 from '../../images/data2.svg';
import Icon3 from '../../images/data3.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  InnerWrapper
} from './ServicesElements';


const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <InnerWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Web & Mobile App</ServicesH2>
            <ServicesP>Creating full stack web & mobile apps</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Chat bots</ServicesH2>
            <ServicesP>Creating Telegram other bots for different tasks</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Blockchain Solutions</ServicesH2>
            <ServicesP>Creating blockchain solutions and DeFi</ServicesP>
          </ServicesCard>
        </InnerWrapper>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
