import allies from '../allies'

// when using fetch, set to empty array
const initialState = {
  allies: allies
}

const allyReducer = (state=initialState, action) => {

  switch (action.type) {
    case "ADD_ALLY":
      let newAlly = action.payload
      let newArray = [newAlly, ...state.allies]
      return {...state, allies: newArray}

    case "REMOVE_ALLY":
      let allyRemoved = action.payload
      let filteredAllies = state.allies.filter(ally => ally.name !== allyRemoved)
      return {...state, allies: filteredAllies}

    default:
      return state
  }
}

export default allyReducer
