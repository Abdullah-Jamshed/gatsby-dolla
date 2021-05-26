const INITIAL_STATE = {
  a: "Abdullah",
}

const state = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "A":
      console.log(action.payload.a)
      return {
        ...state,
        a: action.payload.a,
      }
    default:
      return state
  }
}

export default state
