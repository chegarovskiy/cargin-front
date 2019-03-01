import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import "./my-room.css"



class MyRoom extends Component{



    render(){
        return(
          <div className="my-room basic-hover">
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

export default MyRoom;