import { Component } from "react";

class Footer extends Component {
  render() {
    const mystyle = {
      display: 'flex',
      color: 'green',
      flexDirection: 'column',
      alignItems: 'center',
      alignContent: 'center',
      fontSize: '20px',
    };
    return (
      <footer>
        <p style={mystyle}>
          {this.props.message}
        </p>
      </footer>
    );
  }
}

export default Footer;
