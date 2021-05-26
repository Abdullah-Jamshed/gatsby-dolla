import React from "react"
import { FooterElements } from "./footerElements"

const Footer = () => {
  return <FooterElements>© {new Date().getFullYear()}, DOLLA</FooterElements>
}

export default Footer
