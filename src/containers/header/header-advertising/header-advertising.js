import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './header-advertising.css'

class HeaderAdvertising extends Component{



    render(){
        return(
          <div className="header-advertising">
              <div>Каталог запчастей</div>
              <div>Подбор по марке авто</div>

          </div>
        );
    }

}

export default HeaderAdvertising;