import React from 'react';
import ContestantCard from './ContestantCard';

// to connect React app to Redux state:
import { connect } from 'react-redux'; // whatever component wants to get or set information, we have to import {connect} - {connect} is a function

function Contestants(props) {
  console.log('cont',props)

  const mapContestants = () => {
    let contestants = Object.values(props.contestants)

    let contestantCards = contestants.map(contestant => {
      return (<ContestantCard key={contestant.id}
        increaseVote={props.increaseVote}
        decreaseVote={props.decreaseVote}
        contestant={contestant}
        />
      )
    })
    return contestantCards
  }


    return(
      <div>
        {mapContestants()}
      </div>
    );
};


const mapStateToProps = (state) => {
  // console.log('state',state)
  // console.log('state cont',state.contestants)
  return {
    contestants: state.contestants,
    tom: "tomm"
  }
}

export default connect(mapStateToProps)(Contestants);
// the first () passes arguements
