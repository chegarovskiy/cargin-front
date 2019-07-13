import React, {Component} from 'react'
// import {connect} from 'react-redux';
import './order.css'
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import { sendEmail } from "../../../actions/send-email";
import { isShownPopUp } from "../../../actions/popup";

class Order extends Component {



    render() {
        return (
            <div className="order basic-hover" onClick={this.props.sendEmail}>
                <div>
                    <div className="order-icon-conteiner">
                        <div className="order-counter">{this.props.countLineInCard}</div>
                        <i className="fas fa-shopping-cart fa-2x "></i>
                    </div>
                </div>

                <div className="order-text">Корзина</div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    // console.log('email_data',state.partsInCard.partsInCard.length);
    return {
        email_data: state.email_data,
        countLineInCard: state.partsInCard.partsInCard.length
    }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        sendEmail: sendEmail,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
