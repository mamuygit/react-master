import { Container, Row, Col } from 'reactstrap';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import React, { Component } from 'react';

@inject(['myStore'])
@observer

export default class Step2 extends Component {
    constructor(props) {
        super(props);
        console.log(props.myStore);

        if (props.myStore.orderId == 'null') {
            this.props.history.push({
                pathname: '/',
            });
        }
    }

    @autobind
    submitForm(e) {
        e.preventDefault();
        this.props.history.goBack();
    }

    render() {
        // const { goBack } = this.props.navigation;
        // console.log(this.props.navigation);
        return (
            <div className="cart">
                <Container>
                    <Col sm="12">
                        <h1>P2~P2~P2</h1>
                        <p>myStore.orderId: {this.props.myStore.orderId}</p>
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