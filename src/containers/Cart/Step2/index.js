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
        // const { goBack } = this.props.navigation;
        console.log(this.props.navigation);
        return (
            <div className="cart">
                <Container>
                    <Col sm="12">
                        <h1>P2~P2~P2</h1>
                        {/* <Button
                            onPress={() => goBack(`/Cart/Step1`)}
                            title="Go to Brent's profile"
                        /> */}

                    </Col>
                </Container>
                
            </div>
        );
    }
}