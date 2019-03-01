import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
import HeaderTop from "./header-top/header-top";
import HeaderMain from "./header-main/header-main";
import HeaderAdvertising from "./header-advertising/header-advertising";
import "./header.css"


class Header extends Component{



    render(){
        return(

                <div className="my-header">
                    <HeaderTop/>
                    <HeaderMain/>
                    <HeaderAdvertising/>
                </div>


        );
    }

}

export default Header;