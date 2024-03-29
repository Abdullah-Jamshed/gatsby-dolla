import React, { useState } from "react"
import {
  Filter,
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroHeading,
  HeroParagraph,
  Buttonwrapper,
} from "./heroElements"
import { ArrowForward, ArrowRight, Button } from "../Button/Button"

import { graphql, useStaticQuery } from "gatsby"

// import Video from "../../videos/video.mp4"

const HeroSection = props => {
  // STATE
  const [hover, setHover] = useState(false)

  const data = useStaticQuery(graphql`
    {
      contentfulHome(section: { eq: "heroSection" }) {
        video {
          file {
            url
          }
        }
      }
    }
  `)
  const url = data.contentfulHome.video.file.url

  // HANDLER FUNCTIONS

  const hoverHandler = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="hero">
      <HeroBg>
        <VideoBg autoPlay loop muted src={url} type="video/mp4" />
        <Filter />
      </HeroBg>
      <HeroContent>
        <HeroHeading>Virtual Banking Made Easy</HeroHeading>
        <HeroParagraph>
          Sign up for a new account today and receive $250 in credit toward your
          next payment
        </HeroParagraph>
        <Buttonwrapper>
          <Button
            to="signup"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onMouseEnter={hoverHandler}
            onMouseLeave={hoverHandler}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </Buttonwrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
