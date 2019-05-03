import React from 'react'
import { connect } from 'react-redux'; // so this component knows about our application state
import { removeAlly, selectAlly } from '../Redux/actions'

class AllyCard extends React.Component {

  handleClick = () => {
    this.props.removeAlly(this.props.ally.name)
  }
  render(){
    // console.log('al ca',this.props)
    // const { ally, selectAlly, selectedAlly } = this.props
    const { ally, selectAlly, selected } = this.props
    // console.log('al ca=sel',selected)
    // console.log('rendered ally(s)', ally)

    // const selected = selectedAlly.id === ally.id
    console.log('al ca',this.props)

    return(
      <div className="ally-selected" style={selected ? {'borderColor':'cyan'} : {'borderColor':'red'} } onClick={() => selectAlly(ally)}>
        <h4>{ally.name}</h4>
        <p>
          House: {ally.house} | {ally.strength.toUpperCase()}
        </p>
        <p>{selected ? ally.status : null}</p>
        <button onClick={this.handleClick}>Remove</button>
        <br/><br/>
      </div>
    );
  };
};

// mapStateToProps takes in a 2nd argument called ownProps
//
const mapStateToProps = (state, ownProps) => console.log('ownprps',ownProps) || ({
  // selectedAlly: state.selectedAlly
  selected: state.selectedAlly.id === ownProps.ally.id
})

const mapDispatchToProps = (dispatch) => ({
  selectAlly: (ally) => dispatch(selectAlly(ally)),
  removeAlly: (allyName) => {dispatch(removeAlly(allyName))}

})

export default connect(mapStateToProps, mapDispatchToProps)(AllyCard);
// export default connect(null, { removeAlly, selectAlly })(AllyCard);

// const mapDispatchToProps = dispatch => {
//   return {
//     removeAlly: (allyName) => {dispatch({type: "REMOVE_ALLY", payload: allyName})}
//   };
// };

// export default connect(null, mapDispatchToProps)(AllyCard);
