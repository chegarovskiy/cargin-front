import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Bars from "../../../components/header/bars/bars";
import Logo from "../../../components/header/logo/Logo";
import IntputSearchGroup from "../../../components/header/intput-search-group/intput-search-group";
import MyRoom from "../../../components/header/my-room/my-room";
import Order from "../../../components/header/order/order";

import "./header-main.css"


class HeaderMain extends Component{



    render(){
        return(
          <div className="header-main">
              {/*<div className="header-main-left">*/}
                  {/*<Bars/>*/}
                  <Logo/>
                  <IntputSearchGroup/>
              {/*</div>*/}
              <div className="header-main-right">
                  <MyRoom/>
                  <Order/>
              </div>

          </div>
        );
    }

}

export default HeaderMain;