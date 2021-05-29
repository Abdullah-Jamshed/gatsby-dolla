import * as React from "react"
import { graphql } from "gatsby"

// COMPONENTS
import HeroSection from "../components/HeroSection/heroSection"
import InfoSection from "../components/InfoSection/infoSection"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import InfoFlex from "../components/InfoSection/infoFlex"

const IndexPage = ({ data: { allContentfulInfoSection: info } }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <HeroSection />
      {info.nodes.map(data => (
        // <InfoSection key={data.infoSectionID} data={data} />
        <InfoFlex key={data.infoSectionID} data={data} />
      ))}
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
