import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
import './contacts.css'

class Contacts extends Component{



    render(){
        return(
          <div className="contacts">
              <div>
                  <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="basic-hover phone-number">
                  (093) 485-71-10
              </div>
          </div>
        );
    }

}

export default Contacts;