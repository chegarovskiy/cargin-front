import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component{
    render(){

        if (!this.props.car) {
            return (<p>выберете автомобиль...</p>)
        }
        return(
            <div>
                <h2>{this.props.car.value}</h2>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        car: state.active
    }
}

export default connect(mapStateToProps)(Details);