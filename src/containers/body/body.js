import React, {Component} from 'react';
import SearchByCar from "./search-by-car/search-by-car";
import connect from "react-redux/es/connect/connect";
import "./body.css";
import {bindActionCreators} from "redux";
import {BODY_DATA_TYPES} from "../../enums/enum-body"




class Body extends Component{

    _renderPayment(){
        return(
            <div>
                страница оплата
            </div>
        )
    }

    render(){
        console.log("body", this.props.bodyDataType);
        return(
          <div className="my-body">
              {this.props.bodyDataType === BODY_DATA_TYPES.SEARCH_BY_CAR ? <SearchByCar/> : null}
              {this.props.bodyDataType === BODY_DATA_TYPES.PAYMENT ?  this._renderPayment(): null}
          </div>
        );
    }

}

function mapStateToProps(state) {
    console.log('+++++++++++++++++CURRENT_STATATE BODY', state);
    return {
        bodyDataType: state.body.bodyData,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
