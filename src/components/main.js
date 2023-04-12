import { Component } from 'react';
import Image from 'react-bootstrap/Image'
import { SuitHeartFill } from "react-bootstrap-icons";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Main extends Component {
    render() {
        const beastImages = this.props.imageUrls;
        const mystyle = {
            display: 'flex',
            color: 'red',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
            fontSize: '40px',
          };

        return (
            <div>
                <h2 style={mystyle}>{this.props.heading}</h2>

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
                    <Row>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[6].image_url}
                                title={beastImages[6].title}
                                description={beastImages[6].description}
                            />
                        </Col>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[7].image_url}
                                title={beastImages[7].title}
                                description={beastImages[7].description}
                            />
                        </Col>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[8].image_url}
                                title={beastImages[8].title}
                                description={beastImages[8].description}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[9].image_url}
                                title={beastImages[9].title}
                                description={beastImages[9].description}
                            />
                        </Col>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[10].image_url}
                                title={beastImages[10].title}
                                description={beastImages[10].description}
                            />
                        </Col>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[11].image_url}
                                title={beastImages[11].title}
                                description={beastImages[11].description}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[12].image_url}
                                title={beastImages[12].title}
                                description={beastImages[12].description}
                            />
                        </Col>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[13].image_url}
                                title={beastImages[13].title}
                                description={beastImages[13].description}
                            />
                        </Col>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[14].image_url}
                                title={beastImages[14].title}
                                description={beastImages[14].description}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[15].image_url}
                                title={beastImages[15].title}
                                description={beastImages[15].description}
                            />
                        </Col>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[16].image_url}
                                title={beastImages[16].title}
                                description={beastImages[16].description}
                            />
                        </Col>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[17].image_url}
                                title={beastImages[17].title}
                                description={beastImages[17].description}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[18].image_url}
                                title={beastImages[18].title}
                                description={beastImages[18].description}
                            />
                        </Col>
                        <Col>
                            <HornedMammals
                                image_url={beastImages[19].image_url}
                                title={beastImages[19].title}
                                description={beastImages[19].description}
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
            numClicks: 0,
        };
    }


    handleClick = () => {
        let newCount = this.state.numClicks + 1;
        
        this.setState({
            numClicks: newCount,
        });
    }

    render() {
        console.log(this.props.imageUrls);
        return (
            <div onClick={this.handleClick}>
                <h2>{this.props.title}</h2>
                <Image src={this.props.image_url} alt={this.props.description} rounded fluid />
                <p>{this.props.description}</p>
                <p>{this.state.numClicks}</p>
                <SuitHeartFill></SuitHeartFill>
            </div>
        );
    }
}