import styled from "styled-components"
import { FaTimes } from "react-icons/fa"

import { Link as GatsbyLink } from "gatsby"
import { Link as ScrollLink } from "react-scroll"

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SideBarMenu = styled.ul`
  color: #fff;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 480) {
    grid-template-rows: repeat(6, 60px);
  }
`
export const SideBarItems = styled.li``
export const SideBarLink = styled(ScrollLink)`
  justify-content: center;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  list-style: none;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`
export const SideBarBtn = styled.div`
  display: flex;
  justify-content: center;
`
export const SideBarBtnLink = styled(GatsbyLink)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #010606;
    background: #fff;
  }
`
