import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './intput-search-group.css'

 class IntputSearchGroup extends Component {

    render() {
        return (
            <div className="search-form">
                <div className="intput-wrapper">
                    <input className="intput-search" type="text" name="search" placeholder="Введите номер запчасти"></input>
                </div>
                <div className="my-search basic-hover">
                    <i className="fas fa-search fa"></i>
                </div>
            </div>
        )
    }
}

export default IntputSearchGroup;