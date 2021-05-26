import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggleSideBar } from "../../store/actions/action"
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

const Sidebar = () => {
  // REDUX STATE HOOOK
  const { isOpen } = useSelector(state => state.subReducer)

  // REDUX ACTION HOOOK
  const dispatch = useDispatch()

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={() => dispatch(toggleSideBar(!isOpen))} />
      </Icon>

      <SideBarMenu>
        <SideBarItems>
          <SideBarLink to="about">{isOpen}</SideBarLink>
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
