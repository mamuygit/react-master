import { Container, Row, Col } from 'reactstrap';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import React, { Component } from 'react';

@inject(['myStore'])
@observer

export default class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = { firstname: '' };
        if (typeof (props.location.orderId) != "undefined") {
            props.myStore.orderId = props.location.orderId;
        }
        if (props.myStore.orderId == 'null') {
            this.props.history.push({
                pathname: '/',
            });
        }
        // console.log("location: " + props.location.orderId);
        // console.log("myStore: " + props.myStore.orderId);
        console.log(props.myStore);
    }

    componentDidMount() {
        // this.props.myStore.orderId = 'Home456';
        // this.props.myStore.orderId = this.props.location.orderId;
    }

    @autobind
    submitForm(e) {
        // this.props.myStore.orderId = this.state.value;
        this.props.history.push({
            pathname: './step2',
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
                        <Col sm="4">
                            <div>
                                {/* <form onSubmit={this.submitForm}> */}
                                firstname: <input className="form-control" type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
                                <br />
                                <button className="btn btn-primary" type="submit" onClick={this.submitForm}>Continue to Step2</button>
                                {/* </form> */}
                            </div>
                        </Col>
                    </Col>
                </Container>
            </div>
        );
    }

}