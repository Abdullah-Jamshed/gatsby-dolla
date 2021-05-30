import React from "react"
import {
  CloseIcon,
  Icon,
  // SideBarBtn,
  // SideBarBtnLink,
  SidebarContainer,
  SideBarItems,
  SideBarLink,
  SideBarMenu,
} from "./SidebarElements"

// REDUX
import { useSelector, useDispatch } from "react-redux"
import { toggleSideBar } from "../../store/actions/action"

const Sidebar = () => {
  // REDUX STATE HOOOK
  const { isOpen } = useSelector(state => state.subReducer)

  // REDUX ACTION HOOOK
  const dispatch = useDispatch()

  // HANDLER FUNCTION
  const toggleHandler = () => dispatch(toggleSideBar(!isOpen))

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggleHandler} />
      </Icon>

      <SideBarMenu>
        <SideBarItems>
          <SideBarLink onClick={toggleHandler} to="about">
            About
          </SideBarLink>
        </SideBarItems>
        <SideBarItems>
          <SideBarLink onClick={toggleHandler} to="discover">
            Discover
          </SideBarLink>
        </SideBarItems>
        <SideBarItems>
          <SideBarLink onClick={toggleHandler} to="services">
            Services
          </SideBarLink>
        </SideBarItems>
        <SideBarItems>
          <SideBarLink onClick={toggleHandler} to="signup">
            SignUp
          </SideBarLink>
        </SideBarItems>
      </SideBarMenu>

      {/* <SideBarBtn>
        <SideBarBtnLink to="/signIn">Sign In</SideBarBtnLink>
      </SideBarBtn> */}
    </SidebarContainer>
  )
}

export default Sidebar
