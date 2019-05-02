import React from 'react'
import { connect } from 'react-redux'; // so this component knows about our application state
import { removeAlly } from '../Redux/actions'

class AllyCard extends React.Component {

  handleClick = () => {
    this.props.removeAlly(this.props.ally.name)
  }

  render(){
    let { ally } = this.props

    return(
      <div>
        <h4>{ally.name}</h4>
        <p>
          House: {ally.house} | {ally.strength.toUpperCase()}
        </p>
        <button onClick={this.handleClick}>Remove</button>
        <br/><br/>
      </div>
    );
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     removeAlly: (allyName) => {dispatch({type: "REMOVE_ALLY", payload: allyName})}
//   };
// };

// export default connect(null, mapDispatchToProps)(AllyCard);

export default connect(null, { removeAlly })(AllyCard);
