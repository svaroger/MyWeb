import React, { useState } from 'react';
import Icon1 from '../../images/blockchain2.svg';
import Icon2 from '../../images/mobile2.svg';
import Icon3 from '../../images/web2.svg';
import { RouteButton } from '../ButtonElements';
import {
  ArticlesContainer,
  ArticlesH1,
  ArticlesWrapper,
  ArticlesCardWrap,
  ArticlesCard,
  ArticlesIcon,
  ArticlesH2,
  ArticlesP,
  InnerWrapper,
  ArrowForward,
  ArrowRight,
  ArticlesBtnWrapper
} from './ArticlesElements';


const Articles = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <ArticlesContainer id='articles'>
      <ArticlesH1>My Articles</ArticlesH1>
      <ArticlesWrapper>
        <InnerWrapper>
          <ArticlesCardWrap to='/blockchain'>
            <ArticlesCard>
              <ArticlesIcon src={Icon1} />
              <ArticlesH2>Blockchain ID</ArticlesH2>
              <ArticlesP>New form of identification in digital space</ArticlesP>
            </ArticlesCard>
          </ArticlesCardWrap>
          <ArticlesCardWrap to='/blockchain'>
            <ArticlesCard>
              <ArticlesIcon src={Icon2} />
              <ArticlesH2>Web Decentrilization</ArticlesH2>
              <ArticlesP>New decentralized internet infrastructure. IPFS, DeFi, Blockchain</ArticlesP>
            </ArticlesCard>
          </ArticlesCardWrap>
          <ArticlesCardWrap to='/blockchain'>
            <ArticlesCard>
              <ArticlesIcon src={Icon3} />
              <ArticlesH2>Nodejs</ArticlesH2>
              <ArticlesP>Node js and it's incredible performance.</ArticlesP>
            </ArticlesCard>
          </ArticlesCardWrap>
        </InnerWrapper>
      </ArticlesWrapper>
      <ArticlesBtnWrapper>
        <RouteButton
          to='/blockchain'
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
        More articles{hover ? <ArrowForward /> : <ArrowRight />}
        </RouteButton>
      </ArticlesBtnWrapper>
    </ArticlesContainer>
  )
}

export default Articles
