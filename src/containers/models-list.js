import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getModels, putModelsToDb} from "../actions/models";

class ModelsList extends Component{
     constructor(props) {
         super(props)
     }


    showModelsList(){
        console.log(this.props.models_all)
        return this.props.models_all.models_all.map((model) => {return (<li key={model.referred_id.toString()}>{model.name}</li> )})
    }

    render(){
        return(
              <div>
                  <button onClick={this.props.putModelsToDb}>pars models</button>
                  {this.props.isUpdatedMarks ? alert('models is loaded to data base') : null}
                  <button onClick={this.props.getModels}>get models</button>
                  <ul>{this.showModelsList()}</ul>
              </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        models_all: state.models_all,
        isUpdatedModels: state.isUpdatedModels
    }
}

function FetchDispatchToProps(dispatch) {
    return bindActionCreators({getModels: getModels, putModelsToDb: putModelsToDb}, dispatch)
}

export default connect(mapStateToProps, FetchDispatchToProps)(ModelsList);











