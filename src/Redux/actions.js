
// action creators:
export const addAlly = (allyObj) => ({ type: "ADD_ALLY", payload: allyObj})
export const removeAlly = (name) => ({ type: "REMOVE_ALLY", payload: name })
export const selectAlly = (ally) => ({ type: "SELECT_ALLY", payload: ally })
const editAlly = (ally) => ({ type: "EDIT_ALLY", payload: ally })
const loadAllies = (allies) => ({ type: "LOAD_ALLIES", payload: allies })

// thunk creators:
export const patchAlly = (ally) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/allies/${ally.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(ally)
    })
    .then(resp => resp.json())
    .then(allyObj => dispatch(editAlly(allyObj)))
  }
}


export const getAllies = () => (dispatch) => {
  return fetch("http://localhost:3000/api/v1/allies")
  .then(resp => resp.json())
  .then(data => dispatch(loadAllies(data)))
}
