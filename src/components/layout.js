import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// STYLES
import "./layout.css"

// COMPONENTS
import Header from "./header"
import Footer from "./footer"
import AppContainer from "./AppContainer"

const Layout = ({ children }) => {
  // QUERY
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <AppContainer>
        <div>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <main>{children}</main>
        </div>

        <div>
          <Footer />
        </div>
      </AppContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
