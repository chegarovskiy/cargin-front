import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './bars.css'

class Bars extends Component{



    render(){
        return(
          <div className="bars basic-hover">
              <div>
                  <i className="fas fa-bars fa-2x"></i>
              </div>
          </div>
        );
    }

}

export default Bars;


