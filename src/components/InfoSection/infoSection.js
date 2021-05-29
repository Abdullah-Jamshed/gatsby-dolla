import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


// ELEMENTS
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
import { Button } from "../Button/Button"

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
                <Button to="home" dark={dark.toString()} primary={primary.toString()}>
                  {buttonLabel}
                </Button>
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
