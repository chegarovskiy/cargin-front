import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
import './payment.css'
import {bindActionCreators} from "redux";
import {isShowPaymentView} from "../../../actions/paymant";

import connect from "react-redux/es/connect/connect";

class Payment extends Component {

    constructor(props) {
        super(props);
    }

    _renderDataPayment() {
        console.log("adsfasdf");
        return (

            <div className="payment-data">
                страница оплаты
            </div>
        )
    }

    render() {
        return (
            <div className="payment" onClick={() => {this.props.isShownPayment(true)}}>
                <div className="separator"></div>
                <div className="payment-text basic-hover">
                    Оплата
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log(, state);
    return {
        isShownPayment: state.isShownPayment
    }

}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        isShownPayment: isShowPaymentView

    }, dispatch)

}


export default connect(mapStateToProps, mapDispatchToProps)(Payment);