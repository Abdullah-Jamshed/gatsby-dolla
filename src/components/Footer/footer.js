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
              <FooterLink>How its Work</FooterLink>
              <FooterLink>Testimonials</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Investors</FooterLink>
              <FooterLink>Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink>Contact</FooterLink>
              <FooterLink>Support</FooterLink>
              <FooterLink>Destinations</FooterLink>
              <FooterLink>Sponsorship</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink>Submit Video</FooterLink>
              <FooterLink>Ambassadors</FooterLink>
              <FooterLink>Agency</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Infuencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink>Facebook</FooterLink>
              <FooterLink>Youtube</FooterLink>
              <FooterLink>Instagram</FooterLink>
              <FooterLink>Twitter</FooterLink>
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
