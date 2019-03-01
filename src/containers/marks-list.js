import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectCar} from "../actions/index";
import {getMarks, putMarksToDb} from "../actions/marks";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {openModal, closeModal} from "../actions/modalSearch";



class MarksList extends Component{
     constructor(props) {
         super(props)
     }


    showMarksList(){
        console.log('showMarksList()',this.props.marks);
        return this.props.marks.marks.map(
            (mark) => {return (<li key={mark.referred_id.toString()} onClick={this.props.GetModel}>{mark.name}</li> )})
    }


    render(){
        return(
              <div>
                  <button onClick={this.props.putMarksToDb}>pars marks</button>
                  {this.props.isUpdatedMarks ? alert('marks is loaded to data base') : null}


              </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        marks: state.marks,
        isUpdatedMarks: state.isUpdatedMarks,
        isShown: state.modalSearch.modals

    }
}

function FetchDispatchToProps(dispatch) {
    return bindActionCreators({getMarks: getMarks,
                                putMarksToDb: putMarksToDb,
    closeModal: closeModal}, dispatch)
}

export default connect(mapStateToProps, FetchDispatchToProps)(MarksList);