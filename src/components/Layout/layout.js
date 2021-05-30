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

// FONTS
import "@fontsource/encode-sans-expanded"

const Layout = ({ children, pageName }) => {
  return (
    <>
      <AppContainer>
        <div>
          <Sidebar />
          <NavBar pageName={pageName} />
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
