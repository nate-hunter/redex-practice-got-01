import React from 'react';

export default function Header(){
  return(
    <header className="App-header">
      <div>
        <h1>Contestants For The Iron Throne</h1>
      </div>
    </header>
  )
}


// // Practice Redux
// import React from 'react';
// import { connect } from 'react-redux';
// import {addAlly} from '../Redux/actions'
//
// class Header extends React.Component {
//
//   handleClick = () => {
//     this.props.addAlly({
//       name: "Lady Brienne",
//       house: "Tarth",
//       strength: "Sword Fighting"
//     })
//   };
//
//   render(){
//     return(
//       <header className="App-header">
//         <div>
//           <h1>Contestants For The Iron Throne</h1>
//           <button onClick={this.handleClick}>Press</button>
//         </div>
//       </header>
//     )
//   }
// }
//
// export default connect(null, {addAlly})(Header);
