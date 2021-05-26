import * as React from "react"
import { FaBars } from "react-icons/fa"

import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItems,
  NavLink,
  MobileIcons,
  NavBtn,
  NavBtnLink,
} from "./navbarElements"

//  REDUX
import { useDispatch, useSelector } from "react-redux"
import { toggleSideBar } from "../../store/actions/action"

const NavBar = ({ siteTitle }) => {
  
  // REDUX STATE HOOOK
  const { isOpen } = useSelector(state => state.subReducer)

  // REDUX ACTION HOOOK
  const dispatch = useDispatch()

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">Dolla</NavLogo>
        <MobileIcons onClick={() => dispatch(toggleSideBar(!isOpen))}>
          <FaBars />
        </MobileIcons>
        <NavMenu>
          <NavItems>
            <NavLink to="about">About</NavLink>
          </NavItems>
          <NavItems>
            <NavLink to="discover">Discover</NavLink>
          </NavItems>
          <NavItems>
            <NavLink to="services">Services</NavLink>
          </NavItems>
          <NavItems>
            <NavLink to="signup">SignUp</NavLink>
          </NavItems>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/signIn">Sign In</NavBtnLink>
        </NavBtn>
      </NavContainer>
    </Nav>
  )
}

export default NavBar
