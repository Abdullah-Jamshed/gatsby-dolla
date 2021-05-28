import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import AppContainer from "./layoutElements"

// STYLES
import "./layout.css"

// COMPONENTS
import NavBar from "../Navbar/navbar"
import Footer from "../Footer/footer"
import Sidebar from "../SideBar/sidebar"
import HeroSection from "../HeroSection/heroSection"

// FONTS
import "@fontsource/encode-sans-expanded"
import "@fontsource/encode-sans-expanded/700.css"


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
          <Sidebar />
          <NavBar siteTitle={data.site.siteMetadata?.title || `Title`} />
          <HeroSection />
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
