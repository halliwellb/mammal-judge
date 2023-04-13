import React, { Component } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

class SelectedBeast extends Component {
    render() {
        return (
            <Modal show={this.props.display} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.beast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card onClick={this.display}>
                        <Card.Img src={this.props.beast.image_url} />
                        <Card.Text>{this.props.beast.description}</Card.Text>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default SelectedBeast;