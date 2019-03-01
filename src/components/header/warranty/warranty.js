import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
import './warranty.css'

class Warranty extends Component{



    render(){
        return(
          <div className="warranty">
              <div className="separator"></div>
              <div className="warranty-text basic-hover">
                  Гарантия
              </div>
          </div>
        );
    }

}

export default Warranty;