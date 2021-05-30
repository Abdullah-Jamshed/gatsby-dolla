import React, { useState, useEffect } from "react"

// ICONS
import { FaBars } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItems,
  NavLink,
  MobileIcons,
  // NavBtn,
  // NavBtnLink,
} from "./navbarElements"

//  REDUX
import { useDispatch, useSelector } from "react-redux"
import { toggleSideBar } from "../../store/actions/action"
import { animateScroll as scroll } from "react-scroll"

const NavBar = ({ pageName }) => {
  const [scrollNav, setScrollNav] = useState(false)

  // REDUX STATE HOOOK
  const { isOpen } = useSelector(state => state.subReducer)

  // REDUX ACTION HOOOK
  const dispatch = useDispatch()

  // HANDLER FUNCTIONS
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      console.log("44", pageName)
      setScrollNav(false)
    }
  }

  useEffect(() => {
    if (pageName !== "home") {
      setScrollNav(true)
    } else {
      window.addEventListener("scroll", changeNav)
    }
  }, [])

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo to="/" onClick={() => scroll.scrollToTop()}>
            Dolla
          </NavLogo>

          {pageName === "home" && (
            <>
              <MobileIcons onClick={() => dispatch(toggleSideBar(!isOpen))}>
                <FaBars />
              </MobileIcons>
              <NavMenu>
                <NavItems>
                  <NavLink
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    About
                  </NavLink>
                </NavItems>
                <NavItems>
                  <NavLink
                    to="discover"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Discover
                  </NavLink>
                </NavItems>
                <NavItems>
                  <NavLink
                    to="services"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Services
                  </NavLink>
                </NavItems>
                <NavItems>
                  <NavLink
                    to="signup"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    SignUp
                  </NavLink>
                </NavItems>
              </NavMenu>
            </>
          )}

          {/* <NavBtn>
            <NavBtnLink to="/signIn">Sign In</NavBtnLink>
          </NavBtn> */}
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default NavBar
