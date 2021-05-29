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
} from "./infoFlexElements"
import { Button } from "../Button/Button"

const InfoFlex = ({
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
                <Button
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={`true`}
                  offset={-80}
                  dark={dark ? 1 : 0}
                  primary={primary ? 1 : 0}
                >
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

export default InfoFlex
