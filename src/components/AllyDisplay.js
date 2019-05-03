import React from 'react';
import AllyCard from './AllyCard'
import EditAllyForm from './EditAllyForm'

import { connect } from 'react-redux'; // {connect} is a function that can be called with one or two arguments
import { getAllies } from '../Redux/actions'

class AllyDisplay extends React.Component {

  // To fetch allies:
  componentDidMount(){
    this.props.getAllies()
  }


  render(){
    let { allies } = this.props // same as: let allies = this.props.allies // b/c it is taking the key 'allies' in the object 'this.props' (ES6 stuff) = Object destructuring
    const alliesList = allies.map(ally =>
      <AllyCard key={ally.name} ally={ally}/>)

    return(
      <div>
        <EditAllyForm /><br/><hr/>
        <h2>Allies of the Throne</h2>
        <ul>
          {alliesList}
        </ul>
        <hr/>
      </div>
    );
  };
};


const mapStateToProps = (state) => {
  return {
    allies: state.allies
  }
} // be specific as to what is being pulled out

const mapDispatchToProps = { getAllies }


export default connect(mapStateToProps, mapDispatchToProps)(AllyDisplay); // connect returns another function, eg 'mapStateToProps' or 'mapDispatchProps'



// * Do we want to GET or SET information in this component? -- b/c that will affect the argument(s) of connect.
// => We want to have access to the array of the allies

// * What does 'mapStateToProps' do?
// => Takes the application state and maps it to props.
// => It allows us to make use of the state object (that is returned in mapStateToProps)
// => It should return an object that will get merged as props
