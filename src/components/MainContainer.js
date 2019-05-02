import React from 'react';
import Contestants from './Contestants'

class MainContainer extends React.Component {
  // state = {
  //   contestants: {
  //     1: {
  //       id: 1,
  //       name: "Cersei Lannister",
  //       votes: 0,
  //       image: "http://images6.fanpop.com/image/photos/38300000/Cersei-Lannister-TV-Guide-Portrait-game-of-thrones-38344315-500-700.jpg"
  //     },
  //     2: {
  //       id: 2,
  //       name: "Daenerys Targarey",
  //       votes: 0,
  //       image: "https://thumbs.gfycat.com/SelfishWellmadeBlacklab-poster.jpg"
  //     },
  //     3: {
  //       id: 3,
  //       name: "Jon Snow",
  //       votes: 0,
  //       image: "https://data.whicdn.com/images/303267102/large.jpg"
  //     },
  //     4: {
  //       id: 4,
  //       name: "Sansa Stark",
  //       votes: 0,
  //       image: "http://images6.fanpop.com/image/photos/38400000/Sansa-Stark-game-of-thrones-38435423-540-800.png"
  //     }
  //   }
  // }


  // increaseVote = (contestantId) => {
  //   this.setState({
  //     contestants: {
  //       ...this.state.contestants,
  //       [contestantId]: {
  //         ...this.state.contestants[contestantId],
  //         votes: this.state.contestants[contestantId]["votes"] + 1
  //       }
  //     }
  //   })
  // }
  //
  // decreaseVote = (contestantId) => {
  //   this.setState({
  //     contestants: {
  //       ...this.state.contestants,
  //       [contestantId]: {
  //         ...this.state.contestants[contestantId],
  //         votes: this.state.contestants[contestantId]["votes"] - 1
  //       }
  //     }
  //   })
  // }

  render() {
    return(
      <div>
        <Contestants />
        <h4>- iron throne -</h4>
      </div>
    )
  }
};

export default MainContainer;
