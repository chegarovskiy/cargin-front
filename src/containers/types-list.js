import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getTypes, putTypesToDb} from "../actions/types";

class TypesList extends Component{
     constructor(props) {
         super(props)
     }


    showTypesList(){
        console.log(this.props.types_all);
        return this.props.types_all.types_all.map((type) => {return (<li key={type.referred_id.toString()}>{type.referred_id}</li> )})
    }

    render(){
        return(
              <div>
                  <button onClick={this.props.putTypesToDb}>pars types</button>
                  {this.props.isUpdatedTypes ? alert('types is loaded to data base') : null}
                  <button onClick={this.props.getTypes}>get types</button>
                  <ul>{this.showTypesList()}</ul>
              </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        types_all: state.types_all,
        isUpdatedTypes: state.isUpdatedTypes
    }
}

function FetchDispatchToProps(dispatch) {
    return bindActionCreators({getTypes: getTypes, putTypesToDb: putTypesToDb}, dispatch)
}

export default connect(mapStateToProps, FetchDispatchToProps)(TypesList);











