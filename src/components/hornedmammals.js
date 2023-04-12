import { Component } from 'react';

class HornedMammals extends Component {
    render() {
        return (
            <div>
                <h2>beastTitle= {this.props.beastTitle}</h2>
                <p>beastDescription={this.props.beastDescription}</p>
            </div>
        )
    }
}

  export default HornedMammals;