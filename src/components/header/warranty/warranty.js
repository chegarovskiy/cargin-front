import React, {Component} from 'react';
import './warranty.css'
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {setBodyDataType} from "../../../actions/body";
import {BODY_DATA_TYPES} from "../../../enums/enum-body";

class Warranty extends Component{



    render(){
        return(
          <div className="warranty" onClick={() => {this.props.setBodyDataType(BODY_DATA_TYPES.WARRANTY)}}>
              <div className="separator"></div>
              <div className="warranty-text basic-hover">
                  Гарантия
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

export default connect(mapStateToProps, mapDispatchToProps)(Warranty);
