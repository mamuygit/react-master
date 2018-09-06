import { Container, Row, Col } from 'reactstrap';
import { inject, observer } from 'mobx-react'; 
import { observable, observe } from 'mobx';
import autobind from 'autobind-decorator';
import React, { Component  } from 'react';

@inject(['myStore'],['siteState'])
@observer

export default class Home extends Component {

    @observable kochava;
    @observable disposer;

    constructor(props) {
        super(props)
        props.siteState.state = 'create';
    }

    @autobind
    checkout() {
        const orderId = '111'
        this.props.history.push({
            pathname: '/product/cart/step1',
            orderId: orderId
        });
    }

    
    componentWillMount() {
        this.props.siteState.state = 'loading';
        this.kochava = this.props.myStore.kochava;
        console.log('view mounted', this.kochava);
        if (!this.kochava) {
            //init observe
            this.initObserveKochava()
        }
    }

    componentWillUnMount() {
        this.dispose()
    }
    
    initObserveKochava(): void {
        this.disposer = observe(this.props.myStore, 'kochava', (kochavaObservable) => {
            if (kochavaObservable.newValue && kochavaObservable.newValue.kvID !=  null) {
                this.kochava = kochavaObservable.newValue;
            }
            setTimeout(()=>{
                this.props.siteState.state = 'loaded';
            },3000)
            console.log('observe', this.kochava);
        })
    }

    render() {
        return (
            <div className="home">
            {/* Laoding Show */}
            {
                this.props.siteState.state == 'loading' &&
                    <h1>Loading</h1>
            }
            {/* After Load */}
            {
                this.props.siteState.state == 'loaded' &&
                <Container>
                    <h1>Home</h1>
                    <p>myStore.orderId: {this.props.myStore.orderId}</p>
                    <p>My Kochava should <b>kw557a7fa895aed</b>: <u>{this.kochava ? this.kochava.kvID : ''}</u></p>
                    <button className="btn btn-primary" onClick={this.checkout}>Checkout to change orderId to 111</button>
                </Container>
            }
            </div>
        );
    }
}