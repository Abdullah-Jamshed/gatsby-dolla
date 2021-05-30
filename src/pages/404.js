import * as React from "react"
import styled from "styled-components"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

const NotFoundContainer = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`
const H1 = styled.h1`
  padding: 15px;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`
const P = styled.p`
  padding: 15px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

const NotFoundPage = () => (
  <Layout pageName={"notFound"}>
    <Seo title="404: Not found" />
    <NotFoundContainer>
      <H1>Opps! Page Not Found</H1>
      <P>You just hit a route that doesn&#39;t exist... the sadness.</P>
    </NotFoundContainer>
  </Layout>
)

export default NotFoundPage
