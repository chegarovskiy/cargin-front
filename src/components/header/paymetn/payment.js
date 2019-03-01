import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import './payment.css'

import {bindActionCreators} from "redux";
import {setBodyDataType} from "../../../actions/body";
import {BODY_DATA_TYPES} from '../../../enums/enum-body'



class Payment extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="payment" onClick={() => {this.props.setBodyDataType(BODY_DATA_TYPES.PAYMENT)}}>
                <div className="separator"></div>
                <div className="payment-text basic-hover">
                    Оплата
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setBodyDataType: setBodyDataType
    }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);