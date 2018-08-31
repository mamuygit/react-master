import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { inject, observer } from 'mobx-react';

import autobind from 'autobind-decorator';


@inject(['myStore'])
@observer

export default class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        console.log(props);
    }

    componentDidMount() {
        console.log("msg1: " + this.props.location.msg1);
        this.props.myStore.orderId = 'Home456';
    }

    @autobind
    submitForm(e) {
        this.props.myStore.name = this.state.value;
        this.props.history.push({
            pathname: './step2',
            msg1: this.state.value
        });
    }

    @autobind
    handleChange(event) {
        var lang = event.target.value;
        this.setState({ value: lang });
    }

    render() {
        return (
            <div className="cart">
                <Container>
                    <Col sm="12">
                        <h1>P1~P1~P1</h1>
                        <p>myStore.orderId: {this.props.myStore.orderId}</p>
                        <p>myStore.name: {this.props.myStore.name}</p>
                        <Col sm="4">
                            <div>
                                {/* <form onSubmit={this.submitForm}> */}
                                message: <input className="form-control" type="text" name="text" value={this.state.value} onChange={this.handleChange} />
                                <br />
                                <button className="btn btn-primary" type="submit" onClick={this.submitForm}>Submit</button>
                                {/* </form> */}
                            </div>
                        </Col>
                    </Col>
                </Container>
            </div>
        );
    }

}