import React, {Component} from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Nav, NavItem, NavLink } from 'reactstrap';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getMarks, selectMark} from "../../../actions/marks";
import {openModal, closeModal, TabActivator} from "../../../actions/modalSearch";
import {getModelsByMark} from "../../../actions/models";
import {getTypesByModel} from "../../../actions/types";
import {getSubgroupsByType} from "../../../actions/subgroups";
import {getPartsBySubgroup} from "../../../actions/parts";
import "../../../styles/mystyles.css"
import PartsList from "../../../containers/parts-list"
import "./search-by-car.css"

class SearchByCar extends Component {

    constructor(props) {
    super(props);
    }


    showMarksList(){
        return this.props.marks_all.marks.map(
            (mark) => {return (<div className="type-list-margin" key={mark.referred_id.toString()}
                                   onClick={()=>{this.props.getModelsByMark(mark)}}>
                                     <div className="item-type-car">
                                          <div className="item-type-car-head basic-hover">
                                              <div ><span className="pull-left subgroups-name">{mark.name}</span></div>
                                          </div>
                                     </div>
                               </div> )})
    }

    showModelListByMark(){
      console.log('props.modelsByMark.modelsByMark',this.props.modelsByMark.modelsByMark);
        return this.props.modelsByMark.modelsByMark.map(
            (model) => {return (
                <div className="type-list-margin" key={model.referred_id.toString()}
                    onClick={()=>{this.props.getTypesByModel(model)}}>
                     <div className="item-type-car">
                          <div className="item-type-car-head basic-hover">
                              <div ><span className="pull-left subgroups-name">{model.name}</span></div>
                              <div className="pull-right grups-name">{model.terms}</div>
                          </div>
                     </div>

                </div> )})
    }


    showTypeListByMark(){
       // console.log('props.typesByModel.typesByModel',this.props.typesByModel.typesByModel);
       return this.props.typesByModel.typesByModel.map(
           (type) => {return(
               <div className="type-list-margin" key={type.referred_id.toString()}
                    onClick={() => {this.props.getSubgroupsByType(type)}}>
                    <div className="item-type-car">
                        <div className="item-type-car-head basic-hover">
                            <div ><span className="pull-left" >{type.vol}</span></div>
                            <div className="pull-right">{type.terms}</div>
                        </div>
                        <div className="item-type-car-futer">
                            <div className=" type-car-fuel">{type.fuel}</div>
                            <div className="type-car-eng">Тип двигателя: {type.eng}</div>

                        </div>

                    </div>
               </div>

           )}
       )
    }
    showSubgroupsByType(){
      // console.log('props.subgoupsByTupe.subgoupsByTupe',this.props.subgroupsByType.subgroupsByType);
      return this.props.subgroupsByType.subgroupsByType.map(
          (subgroup) => {return(
                <div className="type-list-margin" key={subgroup.referred_id.toString()}
                      onClick={() => {this.props.getPartsBySubgroup(subgroup)}}>
                    <div className="item-type-car">
                        <div className="item-type-car-head basic-hover">
                            <div ><span className="pull-left subgroups-name">{subgroup.name_subgroup}</span></div>
                            <div className="pull-right grups-name">{subgroup.name_group}</div>
                        </div>
                        {/*<div className="item-type-car-futer">*/}
                            {/*<div className=" type-car-fuel">referred_id: {subgroup.referred_id}</div>*/}
                            {/*<div className="type-car-eng">: {}</div>*/}

                        {/*</div>*/}

                    </div>
               </div>
          )})
    }

    showPartsBySubgroup(){

    }

    componentDidMount(){
        this.props.getMarks();
    }



    render() {
          // console.log('this.props.marks.tabClassNameActive', this.props.marks_all.tabClassName);
          const {tabClassNameActive} = this.props;
        return (
            <div>
                <div className="tabs">
                    <div className={"nav-link-marks" === this.props.marks_all.tabClassName ? "tab-active" : "tab basic-hover" } onClick={(event) => {this.props.TabActivator(event.target.id)}} id="nav-link-marks">Марка</div>
                    <div className={"nav-link-models" === this.props.marks_all.tabClassName ? "tab-active" : "tab basic-hover"} onClick={(event) => {this.props.TabActivator(event.target.id)}} id="nav-link-models">Модель</div>
                    <div className={"nav-link-types" === this.props.marks_all.tabClassName ? "tab-active" : "tab basic-hover"} onClick={(event) => {this.props.TabActivator(event.target.id)}} id="nav-link-types">Тип</div>
                    <div className={"nav-link-subgroups" === this.props.marks_all.tabClassName ? "tab-active" : "tab basic-hover"} onClick={(event) => {this.props.TabActivator(event.target.id)}} id="nav-link-subgroups">Група</div>
                    <div className={"nav-link-parts" === this.props.marks_all.tabClassName ? "tab-active" : "tab basic-hover"} onClick={(event) => {this.props.TabActivator(event.target.id)}} id="nav-link-parts">Запчасти</div>
                    <div className="tab-end"></div>
                </div>
                 <div className="content-tabs">
                    {tabClassNameActive === 'nav-link-marks' ? this.showMarksList() : null}
                    {tabClassNameActive === 'nav-link-models' ? this.showModelListByMark() : null}
                    {tabClassNameActive === 'nav-link-types' ? this.showTypeListByMark() : null}
                    {tabClassNameActive === 'nav-link-subgroups' ? this.showSubgroupsByType() : null}
                    {tabClassNameActive === 'nav-link-parts' ? <PartsList/> : null}
                </div>

            </div>

        );
    }
}


function mapStateToProps(state) {
    // console.log('+++++++++++++++++CURRENT_STATATE', state);
    return {
        marks_all: state.marks_all,
        isUpdatedMarks: state.isUpdatedMarks,
        isShown: state.modalSearch.modals,
        selectMark: state.selectMark,
        tabClassNameActive: state.marks_all.tabClassName,
        modelsByMark: state.modelsByMark,
        typesByModel: state.typesByModel,
        subgroupsByType: state.subgroupsByType,
        partsBySubgroup: state.partsBySubgroup

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMarks: getMarks,
        closeModal: closeModal,
        TabActivator: TabActivator,
        getModelsByMark: getModelsByMark,
        getTypesByModel: getTypesByModel,
        getSubgroupsByType : getSubgroupsByType,
        getPartsBySubgroup : getPartsBySubgroup

    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchByCar);