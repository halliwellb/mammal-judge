import { Component } from 'react';

class Header extends Component {
  render() {
    const mystyle = {
      display: 'flex',
      color: 'blue',
      flexDirection: 'column',
      alignItems: 'center',
      alignContent: 'center',
      fontSize: '60px',
    };
    return (
      <header>
        <h1 style={mystyle}>{this.props.title}</h1>
      </header>
    );
  }
}

export default Header;
