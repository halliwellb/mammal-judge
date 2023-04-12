import { Component } from 'react';
import Image from 'react-bootstrap/Image'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Main extends Component {
    render() {
        const beastImages = this.props.imageUrls;
        console.log(beastImages);

        return (
            <div>
                <h2>{this.props.heading}</h2>

                <Container>
                    <Row>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[0].image_url}
                                title={beastImages[0].title}
                                description={beastImages[0].description}
                            />
                        </Col>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[1].image_url}
                                title={beastImages[1].title}
                                description={beastImages[1].description}
                            />
                        </Col>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[2].image_url}
                                title={beastImages[2].title}
                                description={beastImages[2].description}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[3].image_url}
                                title={beastImages[3].title}
                                description={beastImages[3].description}
                            />
                        </Col>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[4].image_url}
                                title={beastImages[4].title}
                                description={beastImages[4].description}
                            />
                        </Col>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[5].image_url}
                                title={beastImages[5].title}
                                description={beastImages[5].description}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class HornedMammals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: "Nope",
            numClicks: 0,
        };
    }


    handleClick = () => {
        const newStatus = this.state.status === "Nope" ? "Yes!" : "Nope";
        this.setState({
            status: newStatus,
        });
    }

    render() {
        console.log(this.props.imageUrls);
        return (
            <div onClick={this.handleClick}>
                <h2>{this.props.title}</h2>
                <Image src={this.props.image_url} alt={this.props.description} rounded fluid />
                <p>{this.props.description}</p>
                <p>{this.state.status}</p>
            </div>
        );
    }
}