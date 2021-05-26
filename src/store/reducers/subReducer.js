const INITIAL_STATE = {
  isOpen: false,
}

const state = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIDEBAR_TOGGLE":
      return {
        ...state,
        isOpen: action.payload.isOpen,
      }
    default:
      return state
  }
}

export default state
