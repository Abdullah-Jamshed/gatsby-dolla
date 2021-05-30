import React from "react"

// FONTS
import "@fontsource/encode-sans-expanded/700.css"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
  ImgWrap,
} from "./servicesElements"
import { graphql, useStaticQuery } from "gatsby"

const ServicesSection = () => {
  const {
    contentfulServicesSection: { bgColor, sectionHeading },
    allContentfulService: { nodes },
  } = useStaticQuery(graphql`
    {
      contentfulServicesSection(sectionId: { eq: "services" }) {
        bgColor
        sectionHeading
      }

      allContentfulService {
        nodes {
          id
          image {
            gatsbyImageData(placeholder: BLURRED)
          }
          heading
          description
        }
      }
    }
  `)

  return (
    <ServicesContainer id="services" bgColor={bgColor}>
      <ServicesH1>{sectionHeading}</ServicesH1>
      <ServicesWrapper>
        {nodes.map(data => (
          <ServicesCard key={data.id}>
            <ImgWrap>
              <GatsbyImage
                image={getImage(data.image.gatsbyImageData)}
                alt={"data.imgAlt"}
              />
            </ImgWrap>
            <ServicesH2>{data.heading}</ServicesH2>
            <ServicesP>{data.description}</ServicesP>
          </ServicesCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default ServicesSection
