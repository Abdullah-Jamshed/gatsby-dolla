import React from "react"
import { HeroBg, HeroContainer, VideoBg } from "./heroElements"
import { graphql, useStaticQuery } from "gatsby"

// import Video from "../../videos/video.mp4"

const HeroSection = props => {
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
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={url} type="video/mp4" />
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection
