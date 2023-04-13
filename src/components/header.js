import { Component } from 'react';

class Header extends Component {
  render() {
    const mystyle = {
      display: 'flex',
      color: 'red',
      flexDirection: 'column',
      alignItems: 'center',
      alignContent: 'center',
      fontSize: '40px',
      padding: '20px',
    };

    const mystyle2 = {
      display: 'flex',
      color: 'blue',
      flexDirection: 'column',
      alignItems: 'center',
      alignContent: 'center',
      fontSize: '30px',
    };

    return (
      <><h1 style={mystyle}>{this.props.title}</h1><p style={mystyle2}>Who's you're favorite mammal? Click the image to enlarge the details.</p></>
    )
  }
}
export default Header;


// import { Component } from 'react';

// class Header extends Component {
//   render() {
//     const mystyle = {
//       display: 'flex',
//       color: 'blue',
//       flexDirection: 'column',
//       alignItems: 'center',
//       alignContent: 'center',
//       fontSize: '60px',
//     };
//     return (
//       <header>
//         <h1 style={mystyle}>{this.props.title}</h1>
//       </header>
//     );
//   }
// }

// export default Header;
