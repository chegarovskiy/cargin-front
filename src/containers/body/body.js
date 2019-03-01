import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
import SearchByCar from "./search-by-car/search-by-car"
import "./body.css"
import {bindActionCreators} from "redux";

import connect from "react-redux/es/connect/connect";

class Body extends Component{



    render(){
        return(
          <div className="my-body">
              {<SearchByCar/>}
          </div>
        );
    }

}

function mapStateToProps(state) {
    console.log('+++++++++++++++++CURRENT_STATATE BODY', state);
    return {
        showInBody: this.state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
