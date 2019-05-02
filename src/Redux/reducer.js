// The point of redux is to take this information ('contestants' below), and insert into whatever component needs the information.
const initialState = {
  contestants: {
    1: {
      id: 1,
      name: "Cersei Lannister",
      votes: 0,
      allies: 0,
      image: "http://images6.fanpop.com/image/photos/38300000/Cersei-Lannister-TV-Guide-Portrait-game-of-thrones-38344315-500-700.jpg"
    },
    2: {
      id: 2,
      name: "Daenerys Targaryen",
      votes: 0,
      allies: 0,
      image: "https://thumbs.gfycat.com/SelfishWellmadeBlacklab-poster.jpg"
    },
    3: {
      id: 3,
      name: "Jon Snow",
      votes: 0,
      allies: 0,
      image: "https://data.whicdn.com/images/303267102/large.jpg"
    },
    4: {
      id: 4,
      name: "Sansa Stark",
      votes: 0,
      allies: 0,
      image: "http://images6.fanpop.com/image/photos/38400000/Sansa-Stark-game-of-thrones-38435423-540-800.png"
    }
  }
}

const reducer = (state=initialState, action) => {
  switch(action.type){

    // case "ADD_TITLE":
    //   return [...state, action.title]

    case "INCREASE_VOTE":
    return {
      ...state,
      contestants: {
        ...state.contestants,
        [action.payload]: {
          ...state.contestants[action.payload],
          votes: state.contestants[action.payload]["votes"] + 1
        }
      }
    };
    case "DECREASE_VOTE":
    return {
      ...state,
      contestants: {
        ...state.contestants,
        [action.payload]: {
          ...state.contestants[action.payload],
          votes: state.contestants[action.payload]["votes"] - 1
        }
      }
    };
    default:
      return state
  }

}

export default reducer;
