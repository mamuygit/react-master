import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import autobind from 'autobind-decorator';

export default class Step2 extends Component {

    constructor(props) {
        super(props);
    }

    @autobind
    submitForm(e) {
        e.preventDefault();
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="cart">
                <Container>
                    <Col sm="12">
                        <h1>P2~P2~P2</h1>
                        message: {this.props.location.msg1}
                        <form onSubmit={this.submitForm}>
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </form>

                    </Col>
                </Container>
            </div>
        );
    }
}