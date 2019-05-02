import React from 'react';
import { connect } from 'react-redux';
import { addAlly } from '../Redux/actions' // imports the actioin's function: 'addAlly()'. Also, b/c 'addAlly' is not exported as a default, it needs to be wrapped in curly braces so it can be found in the file

class AllyForm extends React.Component {
  state = {
    name: "",
    house: "",
    strength: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  } // handling change to local state

  // How to send this Local State object into the Application State?
  // => The form needs to be 'connected' to the Application State -- {connect}
  handleSubmit = (e) => {
    e.preventDefault()
    let allyObj = this.state
    this.props.addAlly(allyObj) // Get this function from 'mapDispatchToProps'
    // console.log("Submitted!");
    console.log('al fo',this.props);
  }

  render(){
    let { name, house, strength } = this.state

    return(
      <div>
        <h2>– Create an Ally –</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" name="name" onChange={this.handleChange} value={name}/>

          <label>House: </label>
          <input type="text" name="house" onChange={this.handleChange} value={house}/>

          <label>Strength: </label>
          <input type="text" name="strength" onChange={this.handleChange} value={strength}/>

          <input type="submit" value="Submit Ally!"/>
          </form>
          <br/><hr/>
      </div>
    );
  };
};

// { addAlly } can be used in place of mapDispatchToProps
export default connect(null, { addAlly })(AllyForm); // Can do this way because of action creators, eg. 'addAlly()' -- instead of manually writing dispatch

// // Should return an object that will get merged as props
// // 'dispatch()' takes in an action object
// // dispatch will send this information into the reducer, which is waiting/listening for the case to be met to then change the application's state
// // payload is what is being sent from the component into the Application state
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addAlly: (allyObj) => {dispatch({type: "ADD_ALLY", payload: allyObj})}
//   }
// } // this object (addAlly()) is available as props in this container
//
// export default connect(null, mapDispatchToProps)(AllyForm);
//
// // mapDispatchToProps:
// // => allows us to pass functions and will dispatch actions when an event gets fired.
// // => most likely the values will be functions
