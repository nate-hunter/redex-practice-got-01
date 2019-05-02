export const addAlly = (allyObj) => {
  return {type: "ADD_ALLY", payload: allyObj}
};

export const removeAlly = (name) => {
  return {type: "REMOVE_ALLY", payload: name}
};


// action creators is a function whose job is to return an object
