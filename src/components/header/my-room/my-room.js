import React, {Component} from 'react';
import "./my-room.css"
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {setBodyDataType} from "../../../actions/body";
import {BODY_DATA_TYPES} from "../../../enums/enum-body";



class MyRoom extends Component{



    render(){
        return(
          <div className="my-room basic-hover" onClick={() => {this.props.setBodyDataType(BODY_DATA_TYPES.PERSONAL_AREA)}}>
              <div>
                  <i className="fas fa-user-circle fa-2x"></i>
              </div>
              <div className="my-room-text">
                  Личный кабинет
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

export default connect(mapStateToProps, mapDispatchToProps)(MyRoom);