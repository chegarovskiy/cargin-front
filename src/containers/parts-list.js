import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getParts, putPartsToDb, isShownParts} from "../actions/parts";
import {putPartToCard} from '../actions/card';
import "../styles/mystyles.css"

class PartsList extends Component{
     constructor(props) {
         super(props)
     }


    showPartsListBySubgroup(){
         console.log('this.props.partsBySubgroup.partsBySubgroup', this.props.partsBySubgroup.partsBySubgroup)
         return this.props.partsBySubgroup.partsBySubgroup.map(
             (part) => { return(
                 <div className="custom-card" key={part.referred_id.toString()}>

                     <div className="custom-card-image">image</div>

                     <div className="custom-card-data">
                         <div className="custom-card-header">
                         <div className="custom-card-header-left">
                              <div><span className="part-number">{part.part_number}</span></div>
                         </div>
                         <div className="custom-card-header-right">
                              <div className="part-brend">{part.brend}</div>

                         </div>
                     </div>
                     <div className="custom-card-body">
                          <div className="part-name">{part.name}</div>
                          <div className="part-description">{part.description}</div>
                     </div>
                     <div className="part-avalability">
                         <div className="is-avalable">наличие: </div>
                         <div className="part-avalability-button">в наличии</div>
                     </div>

                     <div className="custom-card-futer">
                         <div className="custom-card-futer-left">
                             <div className="part-prise">{part.prise} грн</div>

                         </div>
                         <div className="custom-card-futer-right">
                             <div className="button-part-to-cart" onClick={() => {
                                 this.props.putPartToCard(part.part_number.toString())}}>в корзину</div>

                         </div>
                     </div>
                     </div>


                </div>)})
    }

    componentWillUpdate (nextState, nextProps){

    }
    render(){
        return(
              <div>
                  {/*<button onClick={this.props.putPartsToDb}>pars parts</button>*/}
                  {this.props.isUpdatedParts ? alert('types is loaded to data base') : null}
                  {/*<button onClick={this.props.getParts}>get parts</button>*/}
                  {/*<div className="container">*/}
                      <div className="list-card">{this.props.isShownParts ? this.showPartsListBySubgroup() : null}</div>
                  {/*</div>*/}

              </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        parts_all: state.parts_all,
        isUpdatedParts: state.isUpdatedParts,
        partsBySubgroup: state.partsBySubgroup,
        isShownParts: state.isShownParts,
        partsInCard: state.partsInCard
    }
}

function FetchDispatchToProps(dispatch) {
    return bindActionCreators({
        getParts: getParts,
        putPartsToDb: putPartsToDb,
        isShownParts: isShownParts,
        putPartToCard: putPartToCard


    }, dispatch)
}

export default connect(mapStateToProps, FetchDispatchToProps)(PartsList);