import React, {Component} from 'react';
import './delivery.css'
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {setBodyDataType} from "../../../actions/body";
import {BODY_DATA_TYPES} from '../../../enums/enum-body'


class Delivery extends Component{



    render(){
        return(
          <div className="delivery" onClick={() => {this.props.setBodyDataType(BODY_DATA_TYPES.DELIVERY)}}>
              <div className="separator"></div>
              <div className="delivery-text basic-hover">
                  Доставка
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

export default connect(mapStateToProps, mapDispatchToProps)(Delivery);
