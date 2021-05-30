import React from "react"
import { FaFacebook, FaYoutube } from "react-icons/fa"
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./footerElements"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signIn">About us</FooterLink>
              <FooterLink to="/signIn">How its Work</FooterLink>
              <FooterLink to="/signIn">Testimonials</FooterLink>
              <FooterLink to="/signIn">Careers</FooterLink>
              <FooterLink to="/signIn">Investors</FooterLink>
              <FooterLink to="/signIn">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signIn">About us</FooterLink>
              <FooterLink to="/signIn">How its Work</FooterLink>
              <FooterLink to="/signIn">Testimonials</FooterLink>
              <FooterLink to="/signIn">Careers</FooterLink>
              <FooterLink to="/signIn">Investors</FooterLink>
              <FooterLink to="/signIn">Terms of Services</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signIn">About us</FooterLink>
              <FooterLink to="/signIn">How its Work</FooterLink>
              <FooterLink to="/signIn">Testimonials</FooterLink>
              <FooterLink to="/signIn">Careers</FooterLink>
              <FooterLink to="/signIn">Investors</FooterLink>
              <FooterLink to="/signIn">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signIn">About us</FooterLink>
              <FooterLink to="/signIn">How its Work</FooterLink>
              <FooterLink to="/signIn">Testimonials</FooterLink>
              <FooterLink to="/signIn">Careers</FooterLink>
              <FooterLink to="/signIn">Investors</FooterLink>
              <FooterLink to="/signIn">Terms of Services</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo
              to="hero"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              DOLLA
            </SocialLogo>
            <WebsiteRights>
              DOLLA © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/"
                target="_blank"
                aria_label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/"
                target="_blank"
                aria_label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
