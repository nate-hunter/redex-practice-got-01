// import allies from '../allies'

// when using fetch, set to empty array
const initialState = {
  allies: [],
  selectedAlly: {}
}

const allyReducer = (state=initialState, action) => {
  console.log("in reducer: ","ACTION", action, 'state', state)
  switch (action.type) {
    case "LOAD_ALLIES":
      return {...state, allies: action.payload}

    case "ADD_ALLY":
      let newAlly = action.payload
      let newArray = [newAlly, ...state.allies]
      return {...state, allies: newArray}

    case "REMOVE_ALLY":
      let allyRemoved = action.payload
      let filteredAllies = state.allies.filter(ally => ally.name !== allyRemoved)
      return {...state, allies: filteredAllies}

    case "SELECT_ALLY":
      // console.log("selected ally", action)
      return {...state, selectedAlly: action.payload}

    case "EDIT_ALLY":
      // want to look at current allies, find the ally thats changed, and  update that and only that ally
      const newAllies = state.allies.map(ally => {
        if (ally.id === action.payload.id) {
          return {...ally, ...action.payload}
        }else {
          return ally
        }
      })
      return {...state, allies: newAllies}

    default:
      return state
  }
}

export default allyReducer
