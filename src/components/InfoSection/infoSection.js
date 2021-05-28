import React from "react"
import { Button } from "../Button/Button"

// import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./infoElements"

const InfoSection = ({
  data: {
    infoSectionID,
    topLine,
    primary,
    lightText,
    lightBg,
    imgAlt,
    headline,
    description,
    darkText,
    dark,
    buttonLabel,
    imgStart,
    img,
  },
}) => {
  const image = getImage(img.gatsbyImageData)
  return (
    <InfoContainer id={infoSectionID} lightBg={lightBg}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button to="home">{buttonLabel}</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <GatsbyImage image={image} alt={imgAlt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
