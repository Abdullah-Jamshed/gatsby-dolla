// REDUX ACTIONS

export const toggleSideBar = isOpen => {
  return { type: "SIDEBAR_TOGGLE", payload: { isOpen } }
}

