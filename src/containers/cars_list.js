import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectCar} from "../actions/index";

class CarsList extends Component{

    showList(){
        return this.props.cars.map ((car) => {return (<li onClick={() => {
            this.props.selectCar(car)
        }} key={car.id}>{car.model}</li> )})
    }


    render(){

        return(
          <div>
              {/*{this.props.cars[0].id}*/}
              {this.showList()}
          </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        cars: state.cars
    }
}

function MathcDispatchToProps(dispatch) {
    return bindActionCreators({selectCar: selectCar}, dispatch)
}

export default connect(mapStateToProps, MathcDispatchToProps)(CarsList);
