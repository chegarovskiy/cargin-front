import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './logo.css'


class Logo extends Component {

    render() {
        return (
            <div className="logo">
                Car Gin
            </div>
        )
    }
}

export default Logo