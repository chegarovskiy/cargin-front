import React, {Component} from 'react'
import './intput-search-group.css'
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {setBodyDataType} from "../../../actions/body";
import {BODY_DATA_TYPES} from "../../../enums/enum-body";

 class IntputSearchGroup extends Component {

    render() {
        return (
            <div className="search-form">
                <div className="intput-wrapper">
                    <input className="intput-search" type="text" name="search" placeholder="Введите номер запчасти"></input>
                </div>
                <div className="my-search basic-hover" onClick={() => {this.props.setBodyDataType(BODY_DATA_TYPES.RESULT_BY_SEARCH)}}>
                    <i className="fas fa-search fa"></i>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setBodyDataType: setBodyDataType
    }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(IntputSearchGroup);