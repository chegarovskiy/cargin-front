import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './header-advertising.css'
import {BODY_DATA_TYPES} from '../../../enums/enum-body'

class HeaderAdvertising extends Component{

    render(){
        return(
          <div className="header-advertising">
              {this.props.bodyDataType === BODY_DATA_TYPES.PAYMENT ? <div>оплата</div> : null }
              {this.props.bodyDataType === BODY_DATA_TYPES.DELIVERY ? <div>доставка</div> : null }
              {this.props.bodyDataType === BODY_DATA_TYPES.SEARCH_BY_CAR ? <div>подбор по марке авто</div> : null }
              {this.props.bodyDataType === BODY_DATA_TYPES.CARD ? <div>корзина</div> : null }
              {this.props.bodyDataType === BODY_DATA_TYPES.PERSONAL_AREA ? <div>персональный кабинет</div> : null }
              {this.props.bodyDataType === BODY_DATA_TYPES.RESULT_BY_SEARCH ? <div>результаты поиска</div> : null }
              {this.props.bodyDataType === BODY_DATA_TYPES.WARRANTY ? <div>гарантия</div> : null }
          </div>
        );
    }



}

function mapStateToProps(state) {
    return {
        bodyDataType: state.body.bodyData,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAdvertising);
