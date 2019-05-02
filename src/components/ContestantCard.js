import React from 'react';
import { connect } from 'react-redux';

const ContestantCard = (props) => {
  console.log('cc',props)
  return(
    <div>
      <h3>{props.contestant.name}</h3>
      <img className="cont-img" src={props.contestant.image} alt={props.contestant.name}></img>
      <p>VOTES: {props.contestant.votes}</p>
      <button onClick={() => {
        props.increaseVote(props.contestant.id)
      }}>Iron Throned</button>
      <br/><br/>
      <button onClick={() => {
        props.decreaseVote(props.contestant.id)
      }}>Dies</button>
      <br/><br/><hr/>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  console.log('dir', dispatch)
  return {
    increaseVote: (id) => {dispatch({type:"INCREASE_VOTE", payload: id})},
    decreaseVote: (id) => {dispatch({type:"DECREASE_VOTE", payload: id})}
  }
};

export default connect(null, mapDispatchToProps)(ContestantCard);

// 'mapDispatchToProps' will allow us to send information to 'state'
// 'mapDispatchToProps' will give us 'dispatch' for free.
// 'dispatch' is like the "mailman" - its job is to transfer information, which is inside of 'payload', the 'type' is the "address"
