import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { observer } from 'mobx-react';

@observer(['myStore'])
export default class Step1 extends Component {
    constructor(props) {
        super(props) 
        console.log('a', props)
        
    }

    componentDidMount() {
        this.props.myStore.orderId = 'Home1'
    }


    render() {
        return (
            <div className="cart">
                <Container>
                    <Col sm="12">
                        <h1>P1~P1~P1</h1>
                    </Col>
                </Container>
            </div>
        );
    }
}