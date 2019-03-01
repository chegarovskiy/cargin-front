import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Contacts from "../../../components/header/contacts/contacts";
import Payment from "../../../components/header/paymetn/payment";
import Delivery from "../../../components/header/delivery/delivery";
import Warranty from "../../../components/header/warranty/warranty";
import "./header-top.css"


class HeaderTop extends Component{



    render(){
        return(
          <div className="header-top">
              <div className="header-top-left">
                  <Contacts/>
              </div>

              <div className="header-top-right">
                  <Payment/>
                  <Delivery/>
                  <Warranty/>
              </div>

          </div>
        );
    }

}

export default HeaderTop