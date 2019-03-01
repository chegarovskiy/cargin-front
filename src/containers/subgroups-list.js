import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getSubgroups, putSubgroupsToDb} from "../actions/subgroups";

class SubgroupList extends Component{
     constructor(props) {
         super(props)
     }


    showSubgroupsList(){
        console.log(this.props.types_all);
        // return this.props.types_all.types_all.map((type) => {return (<li key={type.referred_id.toString()}>{type.referred_id}</li> )})
    }

    render(){
        return(
              <div>
                  <button onClick={this.props.putSubgroupsToDb}>pars subgroups</button>
                  {this.props.isUpdatedTypes ? alert('types is loaded to data base') : null}
                  <button onClick={this.props.getTypes}>get subgroups</button>
                  <ul>{this.showSubgroupsList()}</ul>
              </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        types_all: state.types_all,
        isUpdatedSubgroups: state.isUpdatedSubgroups
    }
}

function FetchDispatchToProps(dispatch) {
    return bindActionCreators({getSubgroups: getSubgroups, putSubgroupsToDb: putSubgroupsToDb}, dispatch)
}

export default connect(mapStateToProps, FetchDispatchToProps)(SubgroupList);