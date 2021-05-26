import React from "react"
import styled from "styled-components"

const FooterElements = styled.footer`
  margin-top: 2rem;
  text-align: center;
  padding: 20px;
`

const Footer = () => {
  return (
    <FooterElements>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </FooterElements>
  )
}

export default Footer
