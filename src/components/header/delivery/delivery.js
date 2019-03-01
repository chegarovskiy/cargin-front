import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
import './delivery.css'

class Delivery extends Component{



    render(){
        return(
          <div className="delivery ">
              <div className="separator"></div>
              <div className="delivery-text basic-hover">
                  Доставка
              </div>
          </div>
        );
    }

}

export default Delivery;