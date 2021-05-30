import * as React from "react"
import { graphql } from "gatsby"

// COMPONENTS
import HeroSection from "../components/HeroSection/heroSection"
import Layout from "../components/Layout/layout"
import InfoFlex from "../components/InfoSection/infoFlex"
import ServicesSection from "../components/Sevices/servicesSection"
import Seo from "../components/seo"

const IndexPage = ({ data: { allContentfulInfoSection: info } }) => {
  return (
    <Layout pageName={"home"}>
      <Seo title="Home" />
      <HeroSection />
      {info.nodes.map(data => (
        <InfoFlex key={data.infoSectionID} data={data} />
      ))}
      <ServicesSection />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulInfoSection {
      nodes {
        infoSectionID
        topLine
        primary
        lightTextDesc
        lightText
        lightBg
        imgAlt
        headline
        description
        darkText
        dark
        buttonLabel
        imgStart
        img {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`

export default IndexPage
