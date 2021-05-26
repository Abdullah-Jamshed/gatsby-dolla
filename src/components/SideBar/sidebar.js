import React from "react"
// import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import {
  CloseIcon,
  Icon,
  SideBarBtn,
  SideBarBtnLink,
  SidebarContainer,
  SideBarItems,
  SideBarLink,
  SideBarMenu,
} from "./SidebarElements"

const Sidebar = ({ isOpen }) => {
  // REDUX STATE HOOOK
  const data = useSelector(state => state.subReducer)

  // REDUX ACTION HOOOK
  //   const dispatch = useDispatch()

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon />
      </Icon>

      <SideBarMenu>
        <SideBarItems>
          <SideBarLink to="about">{data.a}</SideBarLink>
        </SideBarItems>
        <SideBarItems>
          <SideBarLink to="about">About</SideBarLink>
        </SideBarItems>
        <SideBarItems>
          <SideBarLink to="discover">Discover</SideBarLink>
        </SideBarItems>
        <SideBarItems>
          <SideBarLink to="services">Services</SideBarLink>
        </SideBarItems>
        <SideBarItems>
          <SideBarLink to="signup">SignUp</SideBarLink>
        </SideBarItems>
      </SideBarMenu>

      <SideBarBtn>
        <SideBarBtnLink to="/signIn">Sign In</SideBarBtnLink>
      </SideBarBtn>
    </SidebarContainer>
  )
}

export default Sidebar
