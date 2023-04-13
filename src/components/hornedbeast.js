import { Component } from 'react';
import { Card } from 'react-bootstrap';

class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        }
    }
    addClick = () => {
        this.setState({
            likes: this.state.likes + 1
        })
        this.props.display(this.props.title)
    }
    render() {
        const mystyle = {
            display: 'flex',
            color: 'purple',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
            fontSize: '25px',
          };
        return (
            <Card onClick={this.addClick}>
                <h2 style={mystyle}>{this.props.title}</h2>
                <Card.Img src={this.props.imageSrc} />
                <p>&hearts; {this.state.likes} </p>
            </Card>
        )
    }
}
export default HornedBeast;